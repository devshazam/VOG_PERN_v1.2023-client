import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import SendPay from "../a-components/SendPay";
import { observer } from "mobx-react-lite";
import { vizit } from "../../arrays/vizitki.js";

const Vizitki = observer(() => {
    const [value, setValue] = useState("");
    const [side, setSide] = useState("odnostoronnie");
    const [vid, setVid] = useState("matovaya");
    const [lam, setLam] = useState("bez");
    const [num, setNum] = useState("96");
    const [description, setDescription] = useState(""); // Телефон
    const name = "Визитки";
    const goodsId = 1;

    useEffect(() => {
        setValue(vizit[side][vid][lam][num]);
        setDescription(
            `Наименование: ${name}; Цена: ${value} рублей; Кол-во сторон печати: ${side}; Бумага: ${vid}; Ламинация: ${lam}; Кол-во: ${num};`
        );
    }, [value, side, num, lam, vid]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image
                            src="/file/pic/vizitki.png"
                            id="goods-image"
                            rounded
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h1>Цена: {value} p.</h1>
                        <hr></hr>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>Стороны печати:</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setSide(e.target.value)
                                        }
                                        value={side}
                                    >
                                        <option value="odnostoronnie">
                                            Односторонние
                                        </option>
                                        <option value="dvustoronnie">
                                            Двусторонние
                                        </option>
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>Бумага:</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => setVid(e.target.value)}
                                        value={vid}
                                    >
                                        <option value="matovaya">
                                            Матовая
                                        </option>
                                        <option value="glyancevaya">
                                            Глянцевая
                                        </option>
                                        <option value="dizinerskaya">
                                            Дизайнерская
                                        </option>
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>Ламинация:</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => setLam(e.target.value)}
                                        value={lam}
                                    >
                                        <option value="bez">
                                            Без ламинации
                                        </option>
                                        <option value="glyancevaya">
                                            Глянцевая
                                        </option>
                                        <option value="matovaya">
                                            Матовая
                                        </option>
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustomUsername"
                            >
                                <Form.Label>Кол-во:</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => setNum(e.target.value)}
                                        value={num}
                                    >
                                        <option value="96">96</option>
                                        <option value="200">200</option>
                                        <option value="500">500</option>
                                        <option value="1000">1000</option>
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                        </Row>

                        <hr></hr>
                        {/* Вспомогательный компонент */}
                        <SendPay
                            value={value}
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
