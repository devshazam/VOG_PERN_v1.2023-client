import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import SendToBasket from "../../components/basket/SendToBasket";
import { observer } from "mobx-react-lite";
import { fetchPriceOfProduce } from "../../http/jsonAPI";

const Banner = observer(() => {
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(""); // ширина баннеар
    const [height, setHeight] = useState(""); // высота баннера
    const [glueCoast, setGlueCoast] = useState(0);
    const [luversCoast, setLuversCoast] = useState(0); // Телефон
    const [description, setDescription] = useState(""); // Телефон
    const [luversStep, setLuversStep] = useState("0"); // Телефон
    const [number, setNumber] = useState("1"); // кол-во баннеров
    const [glue, setGlue] = useState("0");
    const [density, setDensity] = useState("0"); // плотность баннера
    const [coastOfBanner, setCoastOfBanner] = useState([]);
    const [coastOfluvers, setCoastOfluvers] = useState(0);
    const [coastOfGlue, setCoastOfGlue] = useState(0);

    const name = "Баннер";
    const goodsId = "0";

    const glueArray = ["без проклейки", "с проклейкой"];
    const luversStepArray = ["0", "200", "300", "400", "500"]; //
    const densityArray = ["400-440", "500"];
    // console.log(coastOfBanner)

    useEffect(() => {
        fetchPriceOfProduce({ jsonId: 4 })
            .then((data) => {
                setCoastOfBanner(JSON.parse(data.value)[0]);
                setCoastOfluvers(JSON.parse(data.value)[1]);
                setCoastOfGlue(JSON.parse(data.value)[2]);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 151 - Обратитесь к администратору!");
                }
            });
    }, []);

    useEffect(() => {
        if (!width || !height) {
            return;
        }
        if (!width || !height || !number) {
            alert("Не все поля заполнены!");
            return;
        }
        if (
            width.split("").length > 200 ||
            height.split("").length > 200 ||
            number.split("").length > 200
        ) {
            alert("Не более 200 симолов!");
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

        let midNum = (+width * +height * +number) / 1000000;
        let midNum2;
        if (midNum < 1) {
            midNum2 = midNum * coastOfBanner[0][+density];
        } else if (midNum >= 1 && midNum < 5) {
            midNum2 = midNum * coastOfBanner[1][+density];
        } else if (midNum >= 5 && midNum < 10) {
            midNum2 = midNum * coastOfBanner[2][+density];
        } else if (midNum >= 10 && midNum < 50) {
            midNum2 = midNum * coastOfBanner[3][+density];
        } else if (midNum >= 50 && midNum < 100) {
            midNum2 = midNum * coastOfBanner[4][+density];
        } else if (midNum >= 100 && midNum < 500) {
            midNum2 = midNum * coastOfBanner[5][+density];
        } else if (midNum >= 500) {
            midNum2 = midNum * coastOfBanner[6][+density];
        }

        let midluversStep = 0; // стоимость
        if (luversStep !== "0") {
            midluversStep =
                Math.round(
                    ((+width + +height) * +number * 2) /
                        +luversStepArray[+luversStep]
                ) * coastOfluvers; /// цена люверса
        }
        let midglue = 0; // проклейка
        if (glue === "1") {
            midglue = Math.ceil(
                (((+width + +height) * +number * 2) / 1000) * coastOfGlue // цена проклейки за 1 мерт
            );
        }

        setLuversCoast(midluversStep);
        setGlueCoast(midglue);
        if (
            Math.round(+(midNum2 + +midluversStep + +midglue) * 100) / 100 <=
            200
        ) {
            setValue(200);
        } else {
            setValue(
                Math.round((+midNum2 + +midluversStep + +midglue) * 100) / 100
            );
        }

        setDescription(
            `Товар: ${name}; Цена: ${value} рублей; Ширина: ${width} мм; Высота: ${height} мм; Плотность: ${
                densityArray[+density]
            } грамм; Шаг люверсов: ${
                luversStepArray[+luversStep]
            } мм; Проклейка: ${glueArray[+glue]}; Кол-во: ${number};`
        );
    }, [width, density, height, luversStep, number, glue, value]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src="/file/pic/banner.jpg"
                            id="goods-image"
                            alt="Баннеры"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1>Итоговая цена: {value} p. </h1>
                        <h4>(цена люверсов: {luversCoast}р.)</h4>
                        <h4>(цена проклейки: {glueCoast}р.)</h4>
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
                                        placeholder="Высота (мм):"
                                        onChange={(e) =>
                                            setHeight(e.target.value)
                                        }
                                        value={height}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectDensity"
                                    label="Плотность (грамм):"
                                >
                                    <Form.Select
                                        aria-label="Floating label select example"
                                        onChange={(e) =>
                                            setDensity(e.target.value)
                                        }
                                        value={density}
                                    >
                                        <option value="0">400-440</option>
                                        <option value="1">500</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectLuvers"
                                    label="Шаг люверсов**:"
                                >
                                    <Form.Select
                                        aria-label="Floating label select example"
                                        onChange={(e) =>
                                            setLuversStep(e.target.value)
                                        }
                                        value={luversStep}
                                    >
                                        <option value="0">Без люверсов</option>
                                        <option value="1">
                                            200 миллиметров
                                        </option>
                                        <option value="2">
                                            300 миллиметров
                                        </option>
                                        <option value="3">
                                            400 миллиметров
                                        </option>
                                        <option value="4">
                                            500 миллиметров
                                        </option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectGlue"
                                    label="Проклейка:"
                                >
                                    <Form.Select
                                        aria-label="Floating label select example"
                                        onChange={(e) =>
                                            setGlue(e.target.value)
                                        }
                                        value={glue}
                                    >
                                        <option value="0">Без проклейки</option>
                                        <option value="1">
                                            Проклейка по периметру
                                        </option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingNumber"
                                    label="Кол-во:"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Кол-во:"
                                        value={number}
                                        onChange={(e) =>
                                            setNumber(e.target.value)
                                        }
                                    />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>

                        <SendToBasket
                            value={`${value}`}
                            description={description}
                            name={name}
                            id={goodsId}
                        />
                        <p style={{ fontSize: 12 }}>
                            ** - кол-во люверсов может отличчаться на один, два
                            в большую сторону
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
