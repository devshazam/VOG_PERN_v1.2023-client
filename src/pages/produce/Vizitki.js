import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import SendToBasket from "../../components/basket/SendToBasket";
import { observer } from "mobx-react-lite";
// import { vizit } from "../../arrays/vizitki.js";
import { fetchPriceOfProduce } from "../../http/jsonAPI";

const Vizitki = observer(() => {
    const [vizit, setVizit] = useState([]);
    const [value, setValue] = useState(0);
    const [side, setSide] = useState("0");
    const [vid, setVid] = useState("0");
    const [lam, setLam] = useState("0");
    const [num, setNum] = useState("0");
    const [description, setDescription] = useState(""); // Телефон
    const name = "Визитки";
    const goodsId = "0";
    const vizSize = ["односторонние", "двусторонние"];
    const vizVid = ["матовая", "глянцевая", "дизайнерская"];
    const vizLam = ["без ламинации", "глянцевая", "матовая"];
    const vizNum = ["96", "200", "500", "1000"];
    // console.log(vizit);

    useEffect(() => {
        fetchPriceOfProduce({ jsonId: 2 })
            .then((data) => {
                setVizit(JSON.parse(data.value));
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 153 - Обратитесь к администратору!");
                }
            });
    }, []);

    useEffect(() => {
        if (vizit.length == 0) return;
        setValue(vizit[+side][+vid][+lam][+num]);
        setDescription(
            `Наименование: ${name}; Цена: ${value} рублей; Кол-во сторон печати: ${
                vizSize[+side]
            }; Бумага: ${vizVid[+vid]}; Ламинация: ${vizLam[+lam]}; Кол-во: ${
                vizNum[+num]
            };`
        );
    }, [value, side, num, lam, vid, vizit]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src="/file/pic/vizitki.jpg"
                            id="goods-image"
                            alt="Визитку"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1 className="mb-3">Цена: {value} p.</h1>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectSide"
                                    label="Стороны печати:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setSide(e.target.value)
                                        }
                                        value={side}
                                    >
                                        <option value="0">Односторонние</option>
                                        <option value="1">Двусторонние</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Бумага:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => setVid(e.target.value)}
                                        value={vid}
                                    >
                                        <option value="0">Матовая</option>
                                        <option value="1">Глянцевая</option>
                                        <option value="2">Дизайнерская</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectLam"
                                    label="Ламинация:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => setLam(e.target.value)}
                                        value={lam}
                                    >
                                        <option value="0">Без ламинации</option>
                                        <option value="1">Глянцевая</option>
                                        <option value="2">Матовая</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectNum"
                                    label="Кол-во:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => setNum(e.target.value)}
                                        value={num}
                                    >
                                        <option value="0">96</option>
                                        <option value="1">200</option>
                                        <option value="2">500</option>
                                        <option value="3">1000</option>
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

                <h2>Визитки</h2>
                <p>
                    Визитка – это небольшая карточка, обычно размером с визитную
                    карточку, которая содержит информацию о человеке или
                    организации. Она является одним из наиболее популярных и
                    эффективных инструментов маркетинга и коммуникации. Визитки
                    играют важную роль в бизнес-среде, так как они предоставляют
                    возможность представить себя или свою компанию в краткой и
                    лаконичной форме. Они содержат основную информацию, такую
                    как имя, должность, контактные данные и логотип компании.
                    Визитка может также включать информацию о продуктах или
                    услугах, предлагаемых организацией. Преимущества
                    использования визиток очевидны. Во-первых, они являются
                    незаменимым инструментом для обмена контактами и
                    установления деловых связей. Когда вы встречаетесь с
                    потенциальными клиентами, партнерами или коллегами, вы
                    можете легко передать им свою визитку, чтобы они имели ваши
                    контактные данные под рукой. Визитки также помогают создать
                    профессиональный и надежный образ вашей компании. Хорошо
                    оформленная и качественная визитка говорит о серьезности
                    вашего бизнеса и профессионализме. Она может стать первым
                    визуальным впечатлением о вас или вашей компании, поэтому
                    важно уделить внимание ее дизайну и содержанию.
                </p>
            </Container>
        </>
    );
});

export default Vizitki;
