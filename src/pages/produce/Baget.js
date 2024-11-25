import React, { useContext, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// import SendToBasket from "../../components/basket/SendToBasket";
import { observer } from "mobx-react-lite";
// import { vizit } from "../../arrays/vizitki.js";
// import { fetchPriceOfProduce } from "../../http/jsonAPI";
import { bagetArray, typeBaget, imgBaget } from "../../config/bagets";
import Accordion from "react-bootstrap/Accordion";

const Vizitki = observer(() => {
    const [width, setWidth] = useState(""); // ширина баннеар
    const [height, setHeight] = useState(""); // высота баннера
    const [type, setType] = useState("0"); // высота баннера
    const [subType, setSubType] = useState("0"); // высота баннера
    const [color, setColor] = useState("0"); // высота баннера
    const [glass, setGlass] = useState("0"); // высота баннера
    const [back, setBack] = useState("0"); // высота баннера
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [pet, setPet] = useState("0"); // цена товара - расчитаная
    const [aw, setAw] = useState(0); // цена товара - расчитаная

    useEffect(() => {
        if (!width || !height) return;
        if (!Number.isInteger(+width) || !Number.isInteger(+height)) {
            alert("Введите только целое число!");
            return;
        }
        if (+width + +height <= 0 || +width + +height > 300) {
            alert("Сумма ширины и высоты должна быть от 0 до 300 сантиметров!");
            return;
        }
        // if() Фильтрация по 0-300; только числа, false
        setAw(bagetArray.findIndex((elem) => +width + +height <= elem[0]));
        if (aw >= 0) {
            if (bagetArray[aw][+type + 1]) {
                setValue(
                    bagetArray[aw][+type + 1] +
                        (pet === "1" && bagetArray[aw][9]) +
                        (back === "1" && bagetArray[aw][10]) +
                        (back === "2" && bagetArray[aw][11]) -
                        (glass === "1" && bagetArray[aw][8])
                );
            } else {
                setValue("Такого размера не делаем!");
            }
        }
    }, [height, width, type, glass, back, pet, aw]); // <- add the count variable here

    console.log(aw);
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src={`/file/bagets/${
                                Object.keys(imgBaget[+type])[+subType]
                            }/${
                                Object.values(imgBaget[+type])[+subType][+color]
                            }.jpg`}
                            id="goods-image"
                            alt="Визитку"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6} className="wrap-image">
                        <h1 className="mb-3">Цена: {value} p.</h1>
                        <Row>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingWidth"
                                    label="Ширина (СМ):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Ширина (СМ):"
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
                                    label="Высота (СМ):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Высота (СМ):"
                                        onChange={(e) =>
                                            setHeight(e.target.value)
                                        }
                                        value={height}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectSide"
                                    label="Тип:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => {
                                            setType(e.target.value);
                                            setSubType("0");
                                            setColor("0");
                                        }}
                                        value={type}
                                    >
                                        <option value="0">B</option>
                                        <option value="1">C</option>
                                        <option value="2">D</option>
                                        <option value="3">E</option>
                                        <option value="4">F</option>
                                        <option value="5">G</option>
                                        <option value="6">H</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectSide"
                                    label="Подтип:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => {
                                            setSubType(e.target.value);
                                            setColor("0");
                                        }}
                                        value={subType}
                                    >
                                        {Object.keys(typeBaget[+type]).map(
                                            (val, ind) => {
                                                return (
                                                    <option
                                                        key={ind}
                                                        value={ind}
                                                    >
                                                        {val}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectSide"
                                    label="Цвет:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setColor(e.target.value)
                                        }
                                        value={color} >
                                        {Object.values(typeBaget[+type])[
                                            +subType
                                        ].map((val, ind) => {
                                            return (
                                                <option key={ind} value={ind}>
                                                    {val}
                                                </option>
                                            );
                                        })}
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectSide"
                                    label="Стекло"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setGlass(e.target.value)
                                        }
                                        value={glass}
                                    >
                                        {bagetArray[aw][8] ? (
                                            <>
                                                <option value="0">
                                                    Со стеклом (стандарт)
                                                </option>
                                                <option value="1">
                                                    Без стекла
                                                </option>
                                            </>
                                        ) : (
                                            <option value="0">
                                                Без стекла
                                            </option>
                                        )}
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Задник:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setBack(e.target.value)
                                        }
                                        value={back}
                                    >
                                        <option value="0">Стандарт</option>
                                        <option value="1">
                                            доп. из картона
                                        </option>
                                        <option value="2">из ПВХ</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Задник:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => setPet(e.target.value)}
                                        value={pet}
                                    >
                                        <option value="0">без ПЭТ</option>
                                        <option value="1">ПЭТ</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            {/* 
                        <SendToBasket
                            value={`${value}`}
                            description={description}
                            name={name}
                            id={goodsId}
                        /> */}
                        </Row>
                        <hr></hr>
                        <p>
                            <b>Дополнительные опции:</b>
                        </p>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Основные:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <b>Лак для холстов:</b> 2000руб./м2
                                    </p>
                                    <p>
                                        <b>Клеммерные рамы:</b> длина х ширина
                                        (с метрах)х1000+100руб.+20%
                                    </p>
                                    <p>
                                        <b>Переделка рамы:</b> от 100 руб. и
                                        выше
                                    </p>
                                    <p>
                                        <b>Наклейка:</b>
                                    </p>
                                    <ul>
                                        <li>
                                            <b>Англия (аэрозоль):</b> длина х
                                            ширина (в метрах) х 1400руб.
                                        </li>
                                        <li>
                                            <b>Момент (кистью):</b> длина х
                                            ширина (в метрах) х 600руб.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Подрамники:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>Подрамник узкий (12мм):</b> Длина
                                            + ширина (в метрах)
                                            х2х100руб.+100руб.
                                        </li>
                                        <li>
                                            <b>Подрамник широкий (20мм):</b>{" "}
                                            Длина + ширина (в метрах)
                                            х2х200руб.+100руб.
                                        </li>
                                        <li>
                                            <b>Рейка без четверти:</b> Длина +
                                            ширина (в метрах) х2х100руб.+150руб.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Планшет:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            Длина + ширина (в метрах)
                                            х2х100руб.+100руб. - цена рейки
                                        </li>
                                        <li>
                                            Длина + ширина (в метрах) х250руб. -
                                            цена ДВП
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Кант:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>Кант узкий и круглый:</b>
                                            250руб./метр
                                        </li>
                                        <li>
                                            <b>Кант широкий:</b> 300руб./метр
                                        </li>
                                        <li>
                                            <b>Кант с узором:</b> 350руб./метр
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Паспарту:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>Неоарт:</b> Н 1300руб./м2 R
                                            2000руб./м2
                                        </li>
                                        <li>
                                            <b>Бархатное паспарту:</b>{" "}
                                            4000руб./метр
                                        </li>
                                        <li>
                                            <b>Лион:</b> 1500руб./метр
                                        </li>
                                        <li>
                                            Круглое паспарту (макс. 50 см)
                                            обсчитывается как прямоугольное и
                                            прибавляем 50%
                                        </li>
                                        <li>
                                            Овальное паспарту (макс. 50х57,5 см)
                                            обсчитывается как круглое паспарту
                                        </li>
                                        <li>
                                            Максимальная разница между полями
                                            7,5 см
                                        </li>
                                        <li>
                                            Многооконное паспарту считать как
                                            обычное +200руб. за каждое
                                            последующее окно
                                        </li>
                                        <li>
                                            Арочное паспарту считать как обычное
                                            +300руб. за сложность
                                        </li>
                                        <li>
                                            Двойное арочное паспарту считать как
                                            обычное +300руб. за первое паспарту
                                            +50руб. за второе
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Зеркала:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>Полотно зеркальное:</b>
                                            длина х ширина (в метрах) х900
                                        </li>
                                        <li>
                                            <b>Защитная пленка:</b> 300руб./метр
                                        </li>
                                        <li>
                                            <b>Усиливающие уголки, подвес:</b>{" "}
                                            100руб.
                                        </li>
                                        <li>
                                            <b>Доставка:</b> от 200руб. и выше
                                        </li>
                                        <li>
                                            <b>Обрезка:</b> 100руб.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Материалы:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>Простое стекло: </b>
                                            720 руб./метр
                                        </li>
                                        <li>
                                            <b>
                                                Антибликовое (матовое) стекло:{" "}
                                            </b>
                                            3000 руб./метр
                                        </li>
                                        <li>
                                            <b>Музейное стекло: </b>
                                            7900 руб./метр
                                        </li>
                                        <li>
                                            <b>Оргстекло: </b>
                                            840 руб./метр
                                        </li>
                                        <li>
                                            <b>ДВП: </b>
                                            180 руб./метр
                                        </li>
                                        <li>
                                            <b>Картон: </b>
                                            120 руб./метр
                                        </li>
                                        <li>
                                            <b>Пенокартон: </b>
                                            840 руб./метр
                                        </li>
                                        <li>
                                            <b>ПВХ: </b>
                                            900 руб./метр
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Натяжка на подрамник*:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>До 30х40: </b>
                                            150 руб.
                                        </li>
                                        <li>
                                            <b>До 40х60: </b>
                                            200 руб.
                                        </li>
                                        <li>
                                            <b>До 60х80: </b>
                                            250 руб.
                                        </li>
                                        <li>
                                            <b>До 100х100: </b>
                                            500 руб.
                                        </li>
                                        <li>
                                            <b>До 100х150: </b>
                                            750 руб.
                                        </li>
                                    </ul>
                                    <p>* Галерейная натяжка + 50%</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Натяжка вышивки:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>До 20х30: </b>
                                            150 руб.
                                        </li>
                                        <li>
                                            <b>До 30х30: </b>
                                            170 руб.
                                        </li>
                                        <li>
                                            <b>До 30х40: </b>
                                            190 руб.
                                        </li>
                                        <li>
                                            <b>До 35х50: </b>
                                            220 руб.
                                        </li>
                                        <li>
                                            <b>До 40х55: </b>
                                            290 руб.
                                        </li>
                                        <li>
                                            <b>До 50х60: </b>
                                            350 руб.
                                        </li>
                                        <li>
                                            <b>До 60х80: </b>
                                            400 руб.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion
                            defaultActiveKey="0"
                            className="menu-accordion"
                        >
                            <Accordion.Item
                                eventKey="1"
                                className="item-accordion"
                            >
                                <Accordion.Header>
                                    <b>Другое:</b>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <b>
                                                Декорирование внутреней
                                                (внешней) поверхности:{" "}
                                            </b>
                                            75 руб. (общее 150 руб.)
                                        </li>
                                        <li>
                                            <b>Объемное оформление: </b>
                                            140 руб.
                                        </li>
                                        <li>
                                            <b>Уголки 3472 за 4 шт.: </b>
                                            410 руб.
                                        </li>
                                        <li>
                                            <b>Уголки 3473 за 4 шт.: </b>
                                            1080 руб.
                                        </li>
                                        <li>
                                            <b>Уголки 3474 за 4 шт.: </b>
                                            440 руб.
                                        </li>
                                        <li>
                                            <b>Уголки 3475 за 4 шт.: </b>
                                            660 руб.
                                        </li>
                                        <li>
                                            <b>
                                                Монтаж дополнительного предмета
                                                в раму:
                                            </b>
                                            50 руб.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Vizitki;
