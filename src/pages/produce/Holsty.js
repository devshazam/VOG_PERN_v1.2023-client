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
import { z } from 'zod';
import SendToBasket from "../../components/basket/SendToBasket";
import _ from "lodash";
// import { bagetArray, typeBaget, imgBaget } from "../../config/bagets";

const name = "Холст";
const goodsId = "123";
const densityArray = ["21 х 30см", "30 х 40см", "40 х 50см", "40 х 60см", "50 х 70см", "60 х 80см", "80 х 100см", "Свой размер"];



const Holsty = observer(() => {
    const [mainObject, setMainObject] = useState({
        cost: 0, strach: 0, number: 1, width: 1000, height: 1000,});
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [sale, setSale] = useState(0); // цена товара - расчитаная
    const [podram, setPodram] = useState(0); // цена товара - расчитаная
    const [holstM, setHolstM] = useState(0); // цена товара - расчитаная
    const [job, setJob] = useState(0); // цена товара - расчитаная
    const [errors, setErrors] = useState({}); // цена товара - расчитаная
    const [description, setDescription] = useState('');

console.log(mainObject)


    useEffect(() => {
        const parsedCredentials = z
        .object({
            number: z.number({
                required_error: "Обязательно!",
                invalid_type_error: "Только числа!",
            }).positive({ message: "Только положительные!" }).int({ message: "Только целые числа!" }),
            width: z.number({
                required_error: "Обязательно!",
                invalid_type_error: "Только числа!",
            }).positive({ message: "Только положительные!" }).int({ message: "Только целые числа!" }),
            height: z.number({
                required_error: "Обязательно!",
                invalid_type_error: "Только числа!",
            }).positive({ message: "Только положительные!" }).int({ message: "Только целые числа!" }),
        }).safeParse(mainObject);
        if(!parsedCredentials.success){
            setErrors(parsedCredentials.error?.issues.reduce((total, item) => { return {...total, [item.path[0]]: item.message} }, {}));
            setValue(0);
            setSale(0);
            setPodram(0);
            setHolstM(0);
            setJob(0);
            return;
        }else{setErrors({})}

        let count1;
        if(mainObject.cost !== 7){
                    count1 = (+mainObject.number * holstPriceArray[mainObject.strach][mainObject.cost])
        }else{
            let perimetr = ((mainObject.width * 2) + (mainObject.height * 2)) /1000;
            let square = (mainObject.width * mainObject.height / 1000000);
            let qwe = {podram: perimetr * 400, holstM: square * 2500, job: perimetr * 500}
            console.log(perimetr, square, qwe)
            if(mainObject.strach === 0){
                setHolstM(Math.round(qwe.holstM));
                setPodram(0);
                setJob(0);
                count1 = (qwe.holstM) * mainObject.number;
            }
            if(mainObject.strach === 1) {
                setPodram(Math.round(qwe.podram));
                setHolstM(Math.round(qwe.holstM));
                setJob(Math.round(qwe.job));
                count1 = (qwe.job + qwe.holstM + qwe.podram) * mainObject.number;
            }
        }
        if (count1 <= 200) {
            setValue(200);
        } else {
            if( count1 < 5000){
                setValue(Math.round(count1));
                setSale(0)
               }else if( count1 >= 5000 && count1 < 10000){
                setValue(Math.round(count1 * 0.97 ));
                setSale(3)
            }else if(count1 >= 10000){
                setValue(Math.round(count1 * 0.95 ));
                setSale(5)
            }
        }
        setDescription(`Наименование: ${name}; Цена: ${value} рублей; Натяжка: ${(mainObject.strach ? "ДА" : "НЕТ")}; Размер: ${densityArray[mainObject.cost]}; Ширина: ${mainObject.width} мм; Высота: ${mainObject.height} мм; Кол-во: ${mainObject.number};`
        );
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
                            {value}{" "}
                            p.
                        </h1>
                        <h2>Скидка: {sale};</h2>
                        {mainObject.cost === 7 && <h3>Цена подрамника: {podram}; Цена холста: {holstM}; Натяжка (работа): {job};</h3>}
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
                                                cost: +e.target.value,
                                            })
                                        }
                                        value={mainObject.cost}
                                    >
                                        <option value={0}>21 х 30см</option>
                                        <option value={1}>30 х 40см</option>
                                        <option value={2}>40 х 50см</option>
                                        <option value={3}>40 х 60см</option>
                                        <option value={4}>50 х 70см</option>
                                        <option value={5}>60 х 80см</option>
                                        <option value={6}>80 х 100см</option>
                                        <option value={7}>Свой размер</option>
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
                                        {setMainObject({
                                                ...mainObject,
                                                strach: +e.target.value,
                                            });
                                        }}
                                        value={mainObject.strach}
                                    >
                                        <option value={0}>без натяжки</option>
                                        <option value={1}>с натяжкой</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>



                            {mainObject.cost === 7 &&
                                <>
                                    <Form.Group as={Col} md="6" className="mb-3">
                                        <FloatingLabel
                                            controlId="floatingNumber"
                                            label="Ваша ширина (ММ):"
                                        >

                                            <Form.Control
                                                type="text"
                                                placeholder="Шт."
                                               value={mainObject.width}
                                                // value={mainObject.width}
                                                onChange={(e) =>
                                                    setMainObject({
                                                        ...mainObject,
                                                        width: (+e.target.value ? +e.target.value : 0),
                                                    })
                                                }
                                            />

                                            {errors.width && <p style={{color: 'red'}}>{errors.width}</p>}
                                        </FloatingLabel>
                                    </Form.Group>
                                <Form.Group as={Col} md="6" className="mb-3">
                            <FloatingLabel
                                controlId="floatingNumber"
                                label="Ваша высота (MM):"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Шт."
                                    value={mainObject.height}
                                    onChange={(e) =>
                                        setMainObject({
                                            ...mainObject,
                                            height:  (+e.target.value ? +e.target.value : 0),
                                        })
                                    }
                                />
                                {errors.height && <p style={{color: 'red'}}>{errors.height}</p>}
                            </FloatingLabel>
                        </Form.Group></>
                            }


                            <Form.Group as={Col} md="6" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingNumber"
                                    label="Кол-во (ШТ):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Шт."
                                        value={mainObject.number}
                                        onChange={(e) =>
                                            setMainObject({
                                                ...mainObject,
                                                number:  (+e.target.value ? +e.target.value : 0),
                                            })
                                        }
                                    />
                                    {errors.number && <p style={{color: 'red'}}>{errors.number}</p>}
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
                            <b>Калькулятор цены работает исходя из следующих цен:</b>
                        </p>
                        <ul>
                            <li>
                                Подрамник (без печати) цена за метр рейки по периметру - 400
                                руб
                            </li>
                            <li>
                                Натяжка на подрамник (работа) - 500 руб
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



