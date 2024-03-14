import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { observer } from "mobx-react-lite";
// import { holstPriceArray } from "../../config/holsts";
// import SendToBasket from "../../components/basket/SendToBasket";
// import { bagetArray, typeBaget, imgBaget } from "../../config/bagets";

const Falcovka = observer(() => {
    const [mainObject, setMainObject] = useState({
        format: "0",
        number: "1",
    });
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const formatToImage = ['a0.jpg', 'a1gor.jpg', 'a1ver.jpg', 'a2gor.jpg', 'a2ver.jpg', 'a3gor.jpg', 'a3ver.jpg'];
    const formatToPrice = [30, 20, 20, 15, 15, 5, 5];


    useEffect(() => {
        if (!mainObject.number) return;
        if (!Number.isInteger(+mainObject.number)) {
            alert("Введите только целое число!");
            return;
        }

        setValue(formatToPrice[mainObject.format] * mainObject.number)
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
                            src={`/file/falcovka/${formatToImage[mainObject.format]}`}
                            id="goods-image"
                            alt="Фальцовка"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6} className="wrap-image">
                        <h1 className="mb-3">
                            Цена:{value} p.
                        </h1>
                        <Row>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Формат:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) =>
                                            setMainObject({
                                                ...mainObject,
                                                format: e.target.value,
                                            })
                                        }
                                        value={mainObject.format}
                                    >
                                        <option value="0">А0</option>
                                        <option value="1">А1 гор.</option>
                                        <option value="2">А1 вер.</option>
                                        <option value="3">А2 гор.</option>
                                        <option value="4">А2 вер.</option>
                                        <option value="5">А3 гор.</option>
                                        <option value="6">А3 вер.</option>
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

                            {/* <SendToBasket
                            value={`${value}`}
                            description={description}
                            name={name}
                            id={goodsId}
                        /> */}
                        </Row>
                        <hr></hr>
                        <p>
                            <b>Внимание, нестандартные размеры рассчитывабтся по размеру формата (например А1 + А2 = 45 руб.) </b>
                        </p>

                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Falcovka;
