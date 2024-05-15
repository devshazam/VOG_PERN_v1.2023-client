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
import SendToBasket from "../../components/basket/SendToBasket";
// import { bagetArray, typeBaget, imgBaget } from "../../config/bagets";

const formatToImage = ['1.jpg', '2.jpg'];
const formatToSize = ['37 mm', '56 mm'];
const formatToPrice = [[45, 50, 55, 60, 65, 70, 80], [55, 60, 65, 70, 75, 80, 90]];
const salesArray = [500, 300, 100, 50, 10, 5, 0];
const name = "Значки";
const goodsId = "19";

const Falcovka = observer(() => {
    const [mainObject, setMainObject] = useState({
        format: "0",
        number: "1",
    });
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [description, setDescription] = useState("");


    useEffect(() => {
        if (!mainObject.number) return;
        if (!Number.isInteger(+mainObject.number)) {
            alert("Введите только целое число!");
            return;
        }

        setValue(formatToPrice[mainObject.format][salesArray.findIndex((elem) => +mainObject.number >= elem)] * mainObject.number);

        setDescription(
            `Наименование: ${name}; Цена: ${value} рублей; Формат: ${formatToSize[mainObject.format]}; Кол-во: ${mainObject.number}`
        );
    }, [mainObject.number]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">

                         <Image
                            src={`/file/znachki/${formatToImage[mainObject.format]}`}
                            id="goods-image"
                            alt="Фальцовка"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6} className="wrap-image">
                        <h1 className="mb-3">
                            Цена: {value} p.
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
                                        <option value="0">37 mm.</option>
                                        <option value="1">56 mm.</option>
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

                            <SendToBasket
                            value={`${value}`}
                            description={description}
                            name={name}
                            id={goodsId}
                        />
                        </Row>
                        <hr></hr>
                        <p>
                            {/* <b>ВНИМАНИЕ: цена одного экземпляра от 100 руб. за макет + значек</b> */}
                        </p>

                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Falcovka;
