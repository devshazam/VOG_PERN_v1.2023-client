import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


import { createGoodsItem } from "../../http/goodsAPI";

import isEmail from 'validator/lib/isEmail';
//
const PrivateCab = () => {
    const [id, setId] = useState("0");
    const [filter, setFilter] = useState("Баннер");
    const [devices, setDevices] = useState({});
    const [mail, setMail] = useState('');
    const [count, setCount] = useState(0);
    const [phone, setPhone] = useState('');



    async function createGoodsItemFunction(){
        
        if(isEmail(mail)){
            try{const data = await createGoodsItem(mail, phone)
                console.log('11-', data)
                alert('Данные успешно изменены!')
            }catch(e){
                console.log('00->changeCred->PrivateCab.js', e.code, e.message)
                alert('Ошибка Сервера - Обратитесь к администратору!')
            }
                window.location.reload();
        }else{
            alert("Не корректный email!")
        }
        
    }


    // #########################################################################################
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} lg={12}>
                        <h1>Создание товара:</h1>
                        <hr></hr>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom01" >
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
                                md="4"
                                controlId="validationCustom02"
                            >
                                <Form.Label>Описание товара:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Описание товара"
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </Form.Group>


                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom02"
                            >
                                <Form.Label>Цена товара:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Цена товара"
                                    onChange={(e) => setCost(e.target.value)}
                                />
                            </Form.Group>


                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>
                                    Группа товаров:
                                </Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setLuvers(e.target.value) }
                                        value={luvers} >
                                        <option value="0">Без люверсов</option>
                                        <option value="200">
                                            200 миллиметров
                                        </option>
                                        <option value="300">
                                            300 миллиметров
                                        </option>
                                        <option value="400">
                                            400 миллиметров
                                        </option>
                                        <option value="500">
                                            500 миллиметров
                                        </option>
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>


                            <Button variant="danger" onClick={createGoodsItemFunction}>
                                {spinner ? "КУПИТЬ" : <Spinner animation="border"></Spinner>}
                            </Button>
                        </Row>

                        <hr></hr>

                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default PrivateCab;
