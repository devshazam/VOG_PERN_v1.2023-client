import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import SendPay from "../a-components/rt";
import { observer } from "mobx-react-lite";

const Banner = observer(() => {
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(""); // ширина баннеар
    const [height, setHeight] = useState(""); // высота баннера
    const [density, setDensity] = useState("400-440"); // плотность баннера
    const [description, setDescription] = useState(""); // Телефон

    const [luvers, setLuvers] = useState("0"); // Телефон
    const [luversCoast, setLuversCoast] = useState("0"); // Телефон


    // const [file, setFile] = useState(null); // Файл
    const name = "Баннер";

    useEffect(() => {
        if (height && width) {
            if (
                height &&
                width &&
                !isNaN(Number(width)) &&
                !isNaN(Number(height))
            ) {
                let midNum = (Number(width) * Number(height)) / 1000000;
                let midNum2;
                if (midNum < 1) {
                    if (density == "400-440") {
                        midNum2 = midNum * 550;
                    } else {
                        midNum2 = midNum * 650;
                    }
                } else if (midNum >= 1 && midNum < 5) {
                    if (density == "400-440") {
                        midNum2 = midNum * 500;
                    } else {
                        midNum2 = midNum * 600;
                    }
                }
                if (midNum >= 5 && midNum < 10) {
                    if (density == "400-440") {
                        midNum2 = midNum * 400;
                    } else {
                        midNum2 = midNum * 500;
                    }
                }
                if (midNum >= 10 && midNum < 50) {
                    if (density == "400-440") {
                        midNum2 = midNum * 350;
                    } else {
                        midNum2 = midNum * 450;
                    }
                }
                if (midNum >= 50 && midNum < 100) {
                    if (density == "400-440") {
                        midNum2 = midNum * 300;
                    } else {
                        midNum2 = midNum * 400;
                    }
                }
                if (midNum >= 100 && midNum < 500) {
                    if (density == "400-440") {
                        midNum2 = midNum * 280;
                    } else {
                        midNum2 = midNum * 380;
                    }
                }
                if (midNum >= 500) {
                    if (density == "400-440") {
                        midNum2 = midNum * 240;
                    } else {
                        midNum2 = midNum * 340;
                    }
                }
                let midNum14;

                console.log("Стоимость баннера", midNum2);
                if (Number(luvers) === 0) {
                    midNum14 = 0;
                } else {
                    midNum14 =
                    Math.round((((Number(width) + Number(height)) * 2) /
                            Number(luvers))) * 15;
                }

                console.log("Стоимость Люверсов", midNum14);
                setLuversCoast(midNum14);

                if (Math.round((midNum2 + midNum14) * 100) / 100 <= 200) {
                    setValue(200);
                } else {
                    setValue(Math.round((midNum2 + midNum14) * 100) / 100);
                }

                setDescription(
                    `Наименование: ${name}; Цена: ${value} рублей; Ширина: ${width} мм; Высота: ${height} мм; Плотность: ${density} грамм; Люверсы: ${luvers} мм;`
                );
            } else {
                alert("Введите корректные цифры!");
            }
        }
    }, [width, density, height, luvers, value]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/file/pic/banner.jpg"
                            id="goods-image"
                            rounded
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1>Цена: {value} p. </h1>
                        <h2>(цена люверсов: {luversCoast}р.)</h2>
                        <hr></hr>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom01"
                            >
                                <Form.Label>Ширина (мм):</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Миллиметры"
                                    onChange={(e) => setWidth(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Введите ширину!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustom02"
                            >
                                <Form.Label>Высота (мм):</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Миллиметры"
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Введите высоту!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>Плотность (гр):</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setDensity(e.target.value)
                                        }
                                    >
                                        <option value="400-440">400-440</option>
                                        <option value="500">500</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Введите плотность.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>
                                    Растояние между люверсами* (мм):
                                </Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setLuvers(e.target.value)
                                        }
                                        value={luvers}
                                    >
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
                                    <Form.Control.Feedback type="invalid">
                                        Введите плотность.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <hr></hr>

                        <SendPay
                            value={value}
                            description={description}
                            name={name}
                        />
                        <p style={{ fontSize: 12 }}>
                            * - кол-во люверсов может отличчаться на один, два в
                            большую сторону
                        </p>
                    </Col>
                </Row>
                <h2>Баннеры</h2>
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

export default Banner;
