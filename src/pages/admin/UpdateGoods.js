import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";
import { fetchOneGoods, updateItemByID } from "../../http/goodsAPI";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const UpdateGoods = () => {
    const { user } = useContext(Context);
    const { id } = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [group, setGroup] = useState("futbolki");
    const [price, setPrice] = useState("");
    const [goodsItem, setGoodsItem] = useState({});
    const [flag, setFlag] = useState(1);

        useEffect(() => {
            fetchOneGoods( id ).then(data => {
                setGoodsItem(data)
            }).catch((error) => { 
                console.log('dev', error.response.data.message, error);
            });
        }, [ flag ]); 
    

    async function updateGoodsItemFunction() {
        if (!user.user.id) {window.location.reload();}
        if (!name ||!description ||!image ||!group ||!price) { alert("Не все поля заполнены!"); return; }
        if (name.split('').length > 250 || description.split('').length > 1000 || price.split('').length > 250) { alert("Превышенно кол-во символов для данного поля!"); return; }
        if(!+price){alert('Не допустимое значение цены!'); return;}
        if (+image.size > 102400){alert("Вставьте файл не более 100Kb");return}
        if (image.name.split('.').reverse()[0] !== 'jpg'){alert("Формат файла только jpg");return}
        
            const formData = new FormData();
                    formData.append("name", name);
                    formData.append("description", description);
                    formData.append("group", group);
                    formData.append("image", image);
                    formData.append("price", price);
                    formData.append("userId", `${user.user.id}`);
                    formData.append("id", `${id}`);

                updateItemByID(formData).then((data) => {
                    console.log("dev", data);
                    alert("Данные успешно изменены!");
                    setFlag(flag + 1);
                }).catch((error) => { 
                    console.log('dev', error.response.data.message, error)
                    alert("Ошибка: 501 - Обратитесь к администратору!");
                });
    }

    // #########################################################################################
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src={goodsItem.image}
                            id="goods-image"
                            rounded
                        />  
                        <h2>Название: {goodsItem.name}</h2>
                        <p>Цена: {goodsItem.price}</p>
                        <p>Описаниие: {goodsItem.description}</p>
                        <p>Категория: {goodsItem.group}</p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>Введите новые значения:</h2>
                    <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom01"
                            >
                                <Form.Label>Название товара (до 200 символов):</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Название товара"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom01"
                            >
                                <Form.Label>Цена товара (руб.):</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Цена"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom02"
                            >
                                <Form.Label>Описание товара:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Описание товара"
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </Form.Group>



                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>
                                    Файл (Строго: 600 x 600 px; Расширение: jpg:
                                </Form.Label>
                                <Form.Control type="file" required onChange={(e) => setImage(e.target.files[0])} />

                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>Группа товаров:</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setGroup(e.target.value)
                                        }
                                        value={group}
                                    >   
                                        <option value="futbolki">Футболки</option>
                                        <option value="krujki">Кружки</option>
                                        <option value="bagety">Багеты</option>
                                    </Form.Select>
                            </Form.Group>

                            <Button
                                variant="danger"
                                onClick={updateGoodsItemFunction}
                            >Создать
                            </Button>
                        </Row>
                    </Col>
                </Row>

            </Container>


        </>
    );
};

export default UpdateGoods;
