import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fetchOneGoods } from "../../http/goodsAPI";
import SendPay from "../a-components/SendPay";
import { observer } from "mobx-react-lite";

const OneGoods = observer(() => {
    const [goodsItem, setGoodsItem] = useState({});
    const { id } = useParams();
    const [number, setNumber] = useState("1"); // кол-во товараов
    const [value, setValue] = useState(0); // стоимость товараов
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetchOneGoods(id)
            .then((data) => {
                setGoodsItem(data);
                console.log("dev", data);
            })
            .catch((error) => {
                console.log("dev", error.response.data.message, error);
                alert("Ошибка 506 - Обратитесь к администратору!");
            });
    }, [ id ]); // <- add the count variable here

    useEffect(() => {
        if (Object.keys(goodsItem).length === 0) {
            return;
        }
        if (number.split("").length > 10) {
            alert("Слишком большое значение!");
            return;
        }
        if (!+number) {
            alert("не допустимое значение!");
            return;
        }
        setValue(+goodsItem.price * +number);

        setDescription(
            "Название: " +
                goodsItem.name +
                "; ID: " +
                goodsItem.id +
                "; описание: " +
                goodsItem.description +
                "; категория: " +
                goodsItem.group +
                "; кол-во: " +
                number +
                "; цена: " +
                String(+goodsItem.price * +number)
        );
    }, [number, goodsItem]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image src={goodsItem.image} id="goods-image" rounded />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1>{goodsItem.name}</h1>
                        <h2>Цена: {value} p. </h2>
                        <p>Опивание: {goodsItem.description}</p>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustom02"
                            >
                                <Form.Label>Кол-во:</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Штуки"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </Form.Group>
                        </Row>

                        

                        <SendPay
                            value={value}
                            description={description}
                            name={goodsItem.name}
                            id={goodsItem.id}
                        />
                    </Col>
                </Row>
                <h2>Полиграфия</h2>
                <p>
                    Баннеры являются одним из наиболее эффективных и популярных
                    способов рекламы и информационного обозначения. Печать
                    баннеров — это процесс создания крупноформатных материалов с
                    помощью специального оборудования. Ниже приведен текст,
                    описывающий процесс печати баннеров: Печать баннеров – это
                    профессиональный процесс, при котором создаются
                    крупноформатные материалы с использованием
                    специализированного оборудования и высококачественных
                    материалов. Он предоставляет возможность эффективно
                    привлекать внимание к продукту, услуге или событию. Печать
                    баннеров начинается с подготовки дизайна и макета. Дизайнер
                    создает графическое оформление баннера, учитывая его цель и
                    целевую аудиторию. Он может включать в себя логотипы,
                    изображения, текст и другие визуальные элементы.
                </p>
            </Container>
        </>
    );
});

export default OneGoods;
