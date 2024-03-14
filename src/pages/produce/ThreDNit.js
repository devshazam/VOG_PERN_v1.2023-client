import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { observer } from "mobx-react-lite";
import { plaNitColor } from "../../config/nit";
import SendToBasketNoFile from "../../components/basket/SendToBasketNoFile";
// import SendToBasket from "../../components/basket/SendToBasket";
// import { bagetArray, typeBaget, imgBaget } from "../../config/bagets";


const ThreeDNit = observer(() => {
    const [mainObject, setMainObject] = useState({
        type: "0",
        color: '1',
        number: '1',
    });

    const [value, setValue] = useState(0);
    const [procent, setProcent] = useState(0);
    const [description, setDescription] = useState('');

    const salesArray = [100, 50, 10, 5, 0];
    const procetnSale = [10, 7, 5, 3, 0];
    const typeToFolder =['pla', 'abs'];
console.log(mainObject.type)
    useEffect(() => {
        if (!mainObject.number) {return;}
        if (!Number.isInteger(+mainObject.number)) {
            alert("Введите только целое число!");
            setMainObject({...mainObject, number: '0'})
            return;
        }

        setProcent(procetnSale[salesArray.findIndex((elem) => +mainObject.number >= elem)]);
        setValue(1200 * +mainObject.number * (100 - procetnSale[salesArray.findIndex((elem) => +mainObject.number >= elem)]) / 100);

        setDescription(
            `Наименование: 3Д нить; Вид самоклейки: ${
                plaNitColor[mainObject.type][mainObject.color]
            }; Цена: ${value} рублей; Скидка: ${procent} %; Кол-во: ${mainObject.number};`
        );
    }, [JSON.stringify(mainObject)], description); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">

                         <Image
                            src={`/file/3d-nit/${typeToFolder[mainObject.type]}/${mainObject.color}.jpg`}
                            id="goods-image"
                            alt="3д нить"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6} className="wrap-image">
                        <h1 className="mb-3">
                            Цена:{value} p.; Скидка:{procent}%
                        </h1>
                        <Row>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSelectVid"
                                    label="Тип нити:"
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        onChange={(e) => {
                                            setMainObject({
                                                ...mainObject,
                                                type: e.target.value,
                                                color: '1',
                                            })
                                        }
                                        }
                                        value={mainObject.type}
                                    >
                                        <option value="0">PLA</option>
                                        <option value="1">ABS</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
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
                                                color: e.target.value,
                                            })
                                        }
                                        value={mainObject.color}
                                    >

                                        {Object.keys(plaNitColor[mainObject.type]).map((elem, index) => {

                                            return(
                                                <>
                                                    <option key={index} value={elem}>{Object.values(plaNitColor[mainObject.type])[index]}</option>
                                                </>
                                            );
                                        })

                                        }
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

                        </Row>
                                <SendToBasketNoFile
                                value={`${value}`}
                                description={description}
                                name={'3L нить'}
                                id={'44'}
                            />
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default ThreeDNit;
