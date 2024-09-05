import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { observer } from "mobx-react-lite";

import { z } from 'zod';
import SendToBasket from "../../components/basket/SendToBasket";
import _ from "lodash";
// import { bagetArray, typeBaget, imgBaget } from "../../config/bagets";


const name = "Plastick";
const goodsId = "23";
const arrOfValues = [250, 300, 350, 400, 600, 750, 950, 1000, 1350, 1350, 1500, 1750, 1900, 2100, 2450, 2800, 2850, 3150, 3500];
const arrSquer = [1, 3, 5, 10, 20, 50, 100];
const arrArrea = [3500, 3300, 3000, 2900, 2800, 2500];

const Plastick = observer(() => {
    const [mainObject, setMainObject] = useState({
        cost: 0, number: 1, width: 1000, height: 1000,});
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [sale, setSale] = useState(0); // цена товара - расчитаная
    const [errors, setErrors] = useState({}); // цена товара - расчитаная
    const [description, setDescription] = useState('');

console.log(mainObject, value)


    useEffect(() => {
        const parsedCredentials = z
        .object({
            number: z.number({ required_error: "Обязательно!", invalid_type_error: "Только числа!",
            }).positive({ message: "Только положительные!" }).int({ message: "Только целые числа!" }),
            width: z.number({ required_error: "Обязательно!", invalid_type_error: "Только числа!",
            }).positive({ message: "Только положительные!" }).int({ message: "Только целые числа!" }).gt(999, { message: "От: 1000 мм!" }),
            height: z.number({ required_error: "Обязательно!", invalid_type_error: "Только числа!",
            }).positive({ message: "Только положительные!" }).int({ message: "Только целые числа!" }).gt(999, { message: "От: 1000 мм!" }),
        }).safeParse(mainObject);

        if(!parsedCredentials.success){
            setErrors(parsedCredentials.error?.issues.reduce((total, item) => { return {...total, [item.path[0]]: item.message} }, {}));
            setValue(0);
            setSale(0);
            return;
        }else{setErrors({})}



        let count1;
        if(mainObject.cost !== 19){
                    count1 = (+mainObject.number * arrOfValues[mainObject.cost])
        }else{

            let square = (mainObject.width * mainObject.height / 1000000);

            if(1 < square <= 3){
                count1 = 3500 * square * mainObject.number;
            }
            if(3 < square <= 5){
                count1 = 3300 * square * mainObject.number;
            }
            if(5 < square <= 10){
                count1 = 3000 * square * mainObject.number;
            }
            if(10 < square <= 20){
                count1 = 2900 * square * mainObject.number;
            }
            if(20 < square <= 50){
                count1 = 2800 * square * mainObject.number;
            }
            if(50 < square <= 100){
                count1 = 2500 * square * mainObject.number;
            }
        }



        if (count1 <= 200) {
            setValue(200);
            setSale(0)
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
        setDescription(`Наименование: ${name}; Цена: ${value} рублей;  Размер: ${arrOfValues[mainObject.cost]}; Ширина: ${mainObject.width} мм; Высота: ${mainObject.height} мм; Кол-во: ${mainObject.number};`
        );
    }, [JSON.stringify(mainObject)]); // <- add the count variable here

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src={`/2859236526314c46285cd02.35511901.jpg`}
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
                        <h2>Скидка: {sale}%</h2>
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
                                        value={mainObject.cost}>

                                        <option value={0}>100 х 150мм</option>
                                        <option value={1}>150 х 200мм</option>
                                        <option value={2}>300 х 100мм</option>
                                        <option value={3}>210 х 300мм</option>
                                        <option value={4}>300 х 300мм</option>
                                        <option value={5}>300 х 400мм</option>
                                        <option value={6}>400 х 500мм</option>
                                        <option value={7}>400 х 600мм</option>
                                        <option value={8}>500 х 700мм</option>
                                        <option value={9}>600 х 600мм</option>
                                        <option value={10}>600 х 700мм</option>
                                        <option value={11}>600 х 800мм</option>
                                        <option value={12}>600 х 900мм</option>
                                        <option value={13}>600 х 1000мм</option>
                                        <option value={14}>700 х 1000мм</option>
                                        <option value={15}>800 х 1000мм</option>
                                        <option value={16}>900 х 900мм</option>
                                        <option value={17}>900 х 1000мм</option>
                                        <option value={18}>1000 х 1000мм</option>
                                        <option value={19}>Свой размер от 1000 ММ</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="6" className="mb-3">
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
                            </Form.Group> */}



                            {mainObject.cost === 19 &&
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
                            </Row>

                            <SendToBasket
                            value={`${value}`}
                            description={description}
                            name={name}
                            id={goodsId}
                        />
                        <hr></hr>
                        <p> Расчет пластика свыше 1 м2 рассчитывается исходя из следующих данных: от 1 до 3 м2 - 3500 руб.; от 3 до 5 м2 - 3300 руб.; от 5 до 10 м2 - 3000 руб.; от 10 до 20 м2 - 2900 руб.; от 20 до 50 м2 - 2800 руб.; от 50 до 100 м2 - 2500 руб.;</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Plastick;



