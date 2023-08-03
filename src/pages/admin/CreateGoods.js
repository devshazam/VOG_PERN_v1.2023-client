import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { createGoodsItem } from "../../http/goodsAPI";

import isEmail from "validator/lib/isEmail";
//
const PrivateCab = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [group, setGroup] = useState("futbolki");

    async function createGoodsItemFunction() {

        if (!name ||!description ||!image ||!group) { alert("Не все поля заполнены!"); return; }

        if(+image.size > 102400){alert("Вставьте файл не более 100Kb");return}
           

            const formData = new FormData();
                    formData.append("name", name);
                    formData.append("descripton", description);
                    formData.append("gorup", group);
                    formData.append("img", image);


            try {
                const data = await createGoodsItem(formData);
                console.log("+", data);
                alert("Данные успешно внесены!");
            } catch (e) {
                console.log("+->changeCred->PrivateCab.js", e.code, e.message);
                alert("Ошибка Сервера - Обратитесь к администратору!");
            }


    }

    // #########################################################################################
    return (
        <>
            <Container>

                        <h1>Создание товара:</h1>
                        <hr></hr>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustom01"
                            >
                                <Form.Label>Название товара:</Form.Label>
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
                                onClick={createGoodsItemFunction}
                            >Создать
                            </Button>
                        </Row>
            </Container>
        </>
    );
};

export default PrivateCab;
