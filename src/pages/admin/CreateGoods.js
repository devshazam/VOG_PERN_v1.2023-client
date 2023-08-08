import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { createGoodsItem } from "../../http/goodsAPI";

//
const PrivateCab = () => {
    const { user } = useContext(Context);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [group, setGroup] = useState("futbolki");
    const [price, setPrice] = useState("");

    async function createGoodsItemFunction() {
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
                    formData.append("price", Math.ceil(+price));
                    formData.append("userId", `${user.user.id}`);
            try {
                const data = await createGoodsItem(formData);
                console.log("dev", data);
                alert("Данные успешно внесены!");
            } catch (error) {
                console.log('dev', error.response.data.message, error);
                 alert('Ошибка 506 - Обратитесь к администратору!');
            }
    }
// #########################################################################################
    return (
        <>
            <Container>
                        <h1>Создание товара:</h1>
                     
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
                                <Form.Label>Цена товара (Только руб. - Без копеек.!):</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="600"
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
                                className="mb-3"
                            >
                                <Form.Label>Группа товаров:</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setGroup(e.target.value)
                                        }
                                        value={group}
                                    >   
                                        <option value="krujki">Кружки</option>
                                        <option value="futbolki">Футболки</option>
                                        <option value="bagety">Багеты</option>
                                    </Form.Select>
                            </Form.Group>

                            <Button
                                variant="danger"
                                onClick={createGoodsItemFunction}
                            >Создать
                            </Button>
                        </Row>
            </Container>
        </>
    );
};

export default PrivateCab;
