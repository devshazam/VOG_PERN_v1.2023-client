import React, {  useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import SendToBasket from "../../components/basket/SendToBasket";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";

const formatToPrice = [800, 850, 900, 950, 1000];
const salesArray = [100, 50, 10, 5, 0];
const drevkoCast = 200;
const overlokCast = 150;
const drevkoArrayFormat = ['Нет', 'Есть'];

const Samokleyka = observer(() => {
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(""); // ширина баннеар
    const [height, setHeight] = useState(""); // высота баннера
    const [description, setDescription] = useState(""); // Телефон
    const [number, setNumber] = useState("1");
    const [overlock, setOverlock] = useState("0");
    const [drevko, setDrevko] = useState("0");
    const name = "Флаговая ткань!";
    const goodsId = "133";


    useEffect(() => {
        if (!width || !height) {
            return;
        }
        if (!width || !height || !number) {
            alert("Не все поля заполнены!");
            return;
        }
        if (width.split("").length > 200 || height.split("").length > 200) {
            alert("Не более 20 симолов!");
            return;
        }
        if (
            !Number.isInteger(+width) ||
            !Number.isInteger(+height) ||
            !Number.isInteger(+number)
        ) {
            alert("Введите только целое число!");
            return;
        }

        const squer = +width * +height / 1000000;
        const perimetr = 2 * (+width + +height) / 1000;
        setValue(((formatToPrice[salesArray.findIndex((elem) => squer >= elem)] * squer) + drevkoCast * +drevko + perimetr * overlokCast * +overlock) * +number);

        setDescription(
            `Наименование: ${name}; Цена: ${value} рублей; Ширина: ${width} мм; Высота: ${height} мм; Кол-во: ${number}; Древко: ${drevkoArrayFormat[+drevko]}; Оверлок: ${drevkoArrayFormat[+overlock]}`
        );
    }, [
        width, height, number, drevko, value, overlock,
    ]);

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src="/e8d95358aadb4f94a9b4ae91cbf2ebbe.jpg"
                            id="goods-image"
                            alt="Самоклейка"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1>Цена: {value} p.</h1>
                        <h4>(Флаговая, сетчатая ткань!)</h4>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingWidth"
                                    label="Ширина (мм):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Ширина (мм):"
                                        onChange={(e) =>
                                            setWidth(e.target.value)
                                        }
                                        value={width}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingHeight"
                                    label="Высота (мм):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Миллиметры"
                                        onChange={(e) =>
                                            setHeight(e.target.value)
                                        }
                                        value={height}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Оверлок (пог.метр):"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setOverlock(+e.target.value)
                                        }
                                        value={overlock}
                                    >
                                        <option value="0">Без оверлока</option>
                                        <option value="1">Оверлок по периметру</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingNumber"
                                    label="Кол-во самоклеек:"
                                >
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
                                    controlId="floatingSelectPorezka"
                                    label="Древко (труба):"
                                >
                                    <Form.Select
                                        aria-label="Floating label select example"
                                        onChange={(e) =>
                                            setDrevko(+e.target.value)
                                        }
                                        value={drevko}
                                    >
                                        <option value="0">Без древка</option>
                                        <option value="1">C древко (2м., пластик)</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                        <SendToBasket
                            value={`${value}`}
                            description={description}
                            name={name}
                            id={goodsId}
                        />
                    </Col>
                </Row>

            </Container>
        </>
    );
});

export default Samokleyka;
