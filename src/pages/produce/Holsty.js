import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { observer } from "mobx-react-lite";
import { holstPriceArray } from "../../config/holsts";
// import { bagetArray, typeBaget, imgBaget } from "../../config/bagets";

const Holsty = observer(() => {
    const [mainObject, setMainObject] = useState({
        cost: "0",
        strach: "0",
        number: "1",
    });
    const [value, setValue] = useState(0); // цена товара - расчитаная

    useEffect(() => {
        if (!mainObject.number) return;
        if (!Number.isInteger(+mainObject.number)) {
            alert("Введите только целое число!");
            return;
        }

        if (
            Math.round(
                +mainObject.number *
                    holstPriceArray[+mainObject.strach][+mainObject.cost] *
                    100
            ) /
                100 <=
            200
        ) {
            setValue(200);
        } else {
            setValue(
                Math.round(
                    +mainObject.number *
                        holstPriceArray[+mainObject.strach][+mainObject.cost] *
                        100
                ) / 100
            );
        }

        // setDescription(
        //     `Наименование: ${name}; Вид самоклейки: ${
        //         vidToName[+vidSamo]
        //     }; Цена: ${value} рублей; Ширина: ${width} мм; Высота: ${height} мм; Кол-во: ${number}; Порезка: ${
        //         porezkaName[+porezka]
        //     }; Пластик ПВХ: ${plastickArrayFormat[+plastick]}`
        // );
    }, [JSON.stringify(mainObject)]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src={`/file/holst.jpg`}
                            id="goods-image"
                            alt="Холст на порамнике"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6} className="wrap-image">
                        <h1 className="mb-3">
                            Цена:{" "}
                            {+mainObject.number &&
                            holstPriceArray[+mainObject.strach][
                                +mainObject.cost
                            ]
                                ? value
                                : "Недоступно"}{" "}
                            p.
                        </h1>
                        <Row>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Размер:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setMainObject({
                                                ...mainObject,
                                                cost: e.target.value,
                                            })
                                        }
                                        value={mainObject.cost}
                                    >
                                        <option value="0">21 х 30см</option>
                                        <option value="1">30 х 40см</option>
                                        <option value="2">40 х 50см</option>
                                        <option value="3">40 х 60см</option>
                                        <option value="4">50 х 70см</option>
                                        <option value="5">60 х 80см</option>
                                        <option value="6">80 х 100см</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Подрамник с натяжкой:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setMainObject({
                                                ...mainObject,
                                                strach: e.target.value,
                                            })
                                        }
                                        value={mainObject.strach}
                                    >
                                        <option value="0">без натяжки</option>
                                        <option value="1">с натяжкой</option>
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
                                        placeholder="Шт."
                                        value={mainObject.number}
                                        onChange={(e) =>
                                            setMainObject({
                                                ...mainObject,
                                                number: e.target.value,
                                            })
                                        }
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            {/*<SendToBasket
                            value={`${value}`}
                            description={description}
                            name={name}
                            id={goodsId}
                        /> */}
                        </Row>
                        <hr></hr>
                        <p>
                            <b>Не стандартные размеры:</b>
                        </p>
                        <ul>
                            <li>
                                Подрамник (без печати) цена за пог. метр - 300
                                руб
                            </li>
                            <li>Холст цена за кв.м. - 2500 руб</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Holsty;
