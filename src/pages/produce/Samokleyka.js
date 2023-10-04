import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import SendToBasket from "../../components/basket/SendToBasket";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { fetchPriceOfProduce } from "../../http/jsonAPI";

const Samokleyka = observer(() => {
    const { user, device } = useContext(Context);
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(""); // ширина баннеар
    const [height, setHeight] = useState(""); // высота баннера
    const [description, setDescription] = useState(""); // Телефон
    const [vidSamo, setVidSamo] = useState("0");
    const [number, setNumber] = useState("1");
    const [porezka, setPorezka] = useState("0");
    const name = "Cамоклейка";
    const goodsId = "0";
    const [vidToValue, setVidToValue] = useState([]);
    const [porezkaCoast, setPorezkaCoast] = useState([]);


    const vidToName = [
        "белая",
        "черная",
        "цветная",
        "дизайнерская",
        "фотолюминесцентная",
        "перфорированная",
        "прозрачная",
        "светоотражающая",
    ];
    const vidToHref = [
        "/file/samokleyki/belaya.jpg",
        "/file/samokleyki/chernaya.jpg",
        "/file/samokleyki/cvetnaya.jpg",
        "/file/samokleyki/dezainerskaya.jpg",
        "/file/samokleyki/fotoluminiscent.jpg",
        "/file/samokleyki/perforirovanaya.jpg",
        "/file/samokleyki/prozrachnaya.jpg",
        "/file/samokleyki/svetootrajaushaya.jpg",
    ];
    const porezkaName = ["Без порезки", "A6", "A5", "A4", "A3", "A2", "A1"]; // фортмат порезки
console.log(porezkaCoast)
    useEffect(() => {
        fetchPriceOfProduce({ jsonId: 3 })
            .then((data) => {
                setVidToValue(JSON.parse(data.value)[0]);
                setPorezkaCoast(JSON.parse(data.value)[1]);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 152 - Обратитесь к администратору!");
                }
            });
    }, []);

    useEffect(() => {
        if (!width || !height) {
            return;
        }
        if (!width || !height || !vidSamo || !number || !porezka) {
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

        let m1 = (Number(width) * Number(height) * Number(number)) / 1000000; // кол-во кв. метров всего
        let m2;
        if (m1 < 1) {
            m2 = m1 * vidToValue[+vidSamo][0];
        } else if (m1 >= 1 && m1 < 5) {
            m2 = m1 * vidToValue[+vidSamo][1];
        } else if (m1 >= 5 && m1 < 10) {
            m2 = m1 * vidToValue[+vidSamo][2];
        } else if (m1 >= 10) {
            m2 = m1 * vidToValue[+vidSamo][3];
        }

        if (
            Math.round((m2 + +number * porezkaCoast[+porezka]) * 100) / 100 <=
            200
        ) {
            setValue(200);
        } else {
            setValue(
                Math.round((m2 + +number * porezkaCoast[+porezka]) * 100) / 100
            );
        }

        setDescription(
            `Наименование: ${name}; Вид самоклейки: ${
                vidToName[+vidSamo]
            }; Цена: ${value} рублей; Ширина: ${width} мм; Высота: ${height} мм; Кол-во: ${number}; Порезка: ${
                porezkaName[+porezka]
            };`
        );
    }, [
        width,
        height,
        vidSamo,
        number,
        porezka,
        value,
        vidToValue,
        porezkaCoast,
    ]);

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src={vidToHref[+vidSamo]}
                            id="goods-image"
                            alt="Самоклейка"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1>Цена: {value} p.</h1>
                        <h4>(Интерьерная печать)</h4>

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

                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Вид самоклейки:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setVidSamo(e.target.value)
                                        }
                                        value={vidSamo}
                                    >
                                        <option value="0">Белая</option>
                                        <option value="1">Черная</option>
                                        <option value="2">Цветная</option>
                                        <option value="3">Дизайнерская</option>
                                        <option value="4">
                                            Фотолюминесцентная
                                        </option>
                                        <option value="5">
                                            Перфорированная
                                        </option>
                                        <option value="6">Прозрачная</option>
                                        <option value="7">
                                            Светоотражающая
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
                                    label="Формат порезки:"
                                >
                                    <Form.Select
                                        aria-label="Floating label select example"
                                        onChange={(e) =>
                                            setPorezka(e.target.value)
                                        }
                                        value={porezka}
                                    >
                                        <option value="0">Без порезки</option>
                                        <option value="1">А6</option>
                                        <option value="2">А5</option>
                                        <option value="3">А4</option>
                                        <option value="4">А3</option>
                                        <option value="5">А2</option>
                                        <option value="6">А1</option>
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
                <h2>Самоклейки</h2>
                <p>
                    Самоклейки являются одним из наиболее эффективных и
                    популярных способов рекламы и информационного обозначения.
                    Печать самоклеек — это процесс создания крупноформатных
                    материалов с помощью специального оборудования. Ниже
                    приведен текст, описывающий процесс печати самоклеек: Печать
                    самоклеек – это профессиональный процесс, при котором
                    создаются крупноформатные материалы с использованием
                    специализированного оборудования и высококачественных
                    материалов. Он предоставляет возможность эффективно
                    привлекать внимание к продукту, услуге или событию. Печать
                    самоклеек начинается с подготовки дизайна и макета. Дизайнер
                    создает графическое оформление баннера, учитывая его цель и
                    целевую аудиторию. Он может включать в себя логотипы,
                    изображения, текст и другие визуальные элементы.
                </p>
            </Container>
        </>
    );
});

export default Samokleyka;
