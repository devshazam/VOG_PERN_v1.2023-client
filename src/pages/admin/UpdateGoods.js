import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";
import { fetchOneGoods, updateItemByID } from "../../http/goodsAPI";

import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const UpdateGoods = () => {
    const { user } = useContext(Context);
    const { goodsId } = useParams();

    const [spinner, setSpinner] = useState(true); // Запускает спиннер клика по купить
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [group, setGroup] = useState("futbolki");
    const [price, setPrice] = useState('');
    const [goodsItem, setGoodsItem] = useState({});
    const [flag, setFlag] = useState(1);
    const [artikul, setArtikul] = useState('');


    console.log(goodsItem)
        useEffect(() => {
            fetchOneGoods( {goodsId} ).then(data => {
                setGoodsItem(data)
            }).catch((error) => { 
                console.log('dev', error);
            });
        }, [ flag ]); 
    
    async function updateGoodsItemFunction() {
        if (!user.user.id) {window.location.reload();}
        if (!name ||!description ||!image ||!group ||!price) { alert("Не все поля заполнены!"); return; }
        if (name.split('').length > 250 || description.split('').length > 1000 || price.split('').length > 250) { alert("Превышенно кол-во символов для данного поля!"); return; }
        if (!+price){alert('Не допустимое значение цены!'); return;}
        if (+image.size > 102400){alert("Вставьте файл не более 100Kb");return}
        if (image.name.split('.').reverse()[0] !== 'jpg'){alert("Формат файла только jpg");return}
        
            const formData = new FormData();
                    formData.append("name", name);
                    formData.append("description", description);
                    formData.append("group", group);
                    formData.append("image", image);
                    formData.append("price", Math.ceil(+price));
                    formData.append("userId", `${user.user.id}`);
                    formData.append("id", `${goodsId}`);
                    formData.append("artikul", `${artikul}`);

                    setSpinner(false)

                updateItemByID(formData).then((data) => {
                    // console.log("dev", data);
                    setSpinner(true)
                    alert("Данные успешно изменены!");
                    setFlag(flag + 1);
                }).catch((error) => { 
                    console.log('dev', error);
                    alert('Ошибка 511 - Обратитесь к администратору!');
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
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>Введите новые значения:</h2>
                    <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="12"
                            >
                                <Form.Label>Название товара (до 200 символов):</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={goodsItem.name}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="12"
                            >
                                <Form.Label>Артикул:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={goodsItem.artikul}
                                    onChange={(e) => setArtikul(e.target.value)}
                                    value={artikul}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom01"
                            >
                                <Form.Label>Цена товара (руб.):</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={goodsItem.price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                />
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom02"
                            >
                                <Form.Label>Описание товара:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={goodsItem.description}
                                    onChange={(e) => setDescription(e.target.value) }
                                    value={description}
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
                                        <option value="suveniry">Сувенирная продукция</option>
                                    </Form.Select>
                            </Form.Group>

                            
                            {spinner ? 
                            <Button
                                variant="danger"
                                onClick={updateGoodsItemFunction}
                            >Обновить
                            </Button> 
                            : 
                            <Button
                                variant="danger"
                            >
                            <Spinner animation="border"></Spinner>
                            </Button> 
                            }
                        </Row>
                    </Col>
                </Row>

            </Container>


        </>
    );
};

export default UpdateGoods;
