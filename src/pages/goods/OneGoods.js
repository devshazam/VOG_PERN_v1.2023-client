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
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { fetchOneGoods } from "../../http/goodsAPI";
import SendToBasketGoods from "../../components/basket/SendToBasketGoods";
import { observer } from "mobx-react-lite";

const OneGoods = observer(() => {
    const { goodsId } = useParams();

    const [goodsItem, setGoodsItem] = useState({});
    const [number, setNumber] = useState("1"); // кол-во товараов
    const [value, setValue] = useState(0); // стоимость товараов
    const [description, setDescription] = useState("");
    const [sale, setSale] = useState("");
    const [goodsImg, setGoodsImg] = useState("0");
    const arrayGoodsItem = ["без картинки", "с картинкой"];

    useEffect(() => {
        fetchOneGoods({ goodsId })
            .then((data) => {
                setGoodsItem(data);
                // console.log("dev", data);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 141 - Обратитесь к администратору!");
                }
            });
    }, [goodsId]);

    useEffect(() => {
        if (Object.keys(goodsItem).length === 0) return;
        if (number.split("").length > 10) {
            alert("Слишком большое значение!");
            return;
        }
        if (!Number.isInteger(+number)) {
            alert("Введите только целое число!");
            return;
        }

        let midlItem1;
        if (+goodsImg) {
            midlItem1 = (+goodsItem.price + +goodsItem.price_img) * +number;
        } else {
            midlItem1 = +goodsItem.price * +number;
        }

        if (midlItem1 < 3000) {
            setSale("");
        } else if (midlItem1 >= 3000 && midlItem1 < 10000) {
            midlItem1 = midlItem1 * 0.97;
            setSale("3%");
        } else if (midlItem1 >= 10000 && midlItem1 < 50000) {
            midlItem1 = midlItem1 * 0.95;
            setSale("5%");
        } else if (midlItem1 >= 50000 && midlItem1 < 100000) {
            midlItem1 = midlItem1 * 0.93;
            setSale("7%");
        } else if (midlItem1 >= 100000) {
            midlItem1 = midlItem1 * 0.9;
            setSale("10%");
        }
        setValue(Math.ceil(midlItem1 * 100) / 100);

        setDescription(
            "Название: " +
                goodsItem.name +
                "; Картинка: " +
                arrayGoodsItem[goodsImg] +
                "; ID: " +
                goodsItem.id +
                "; описание: " +
                goodsItem.description +
                "; категория: " +
                goodsItem.group +
                "; кол-во: " +
                number +
                "; цена: " +
                String(midlItem1)
        );
    }, [number, goodsItem, goodsImg]); // <- add the count variable here
    return (
        <>
            <Container>
                <Row className="mb-3">
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src={goodsItem.image}
                            id="goods-image"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1>{goodsItem.name}</h1>
                        <h2 className="mb-3">
                            Цена: {value} p. {sale && "Скидка " + sale}
                        </h2>
                        <p>Артикул: {goodsItem.artikul}</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Кол-во:"
                                >
                                    {" "}
                                    {/* вставить сюда уникальный controlID */}
                                    <Form.Control
                                        type="text"
                                        placeholder="Штуки"
                                        value={number}
                                        onChange={(e) =>
                                            setNumber(e.target.value)
                                        }
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingGoodsImg"
                                    label="Оформление:"
                                >
                                    {" "}
                                    {/* вставить сюда уникальный controlID */}
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setGoodsImg(e.target.value)
                                        }
                                        value={goodsImg}
                                    >
                                        <option value="0">
                                            Без оформления
                                        </option>
                                        <option value="1">
                                            Прикрепить изображение
                                        </option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                        <SendToBasketGoods
                            value={`${value}`}
                            description={description}
                            name={goodsItem.name}
                            id={`${goodsItem.id}`}
                            goodsFlag={goodsImg}
                        />
                    </Col>
                </Row>
                <h2>{goodsItem.name}</h2>
                <p>{goodsItem.description}</p>
            </Container>
        </>
    );
});

export default OneGoods;
