import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createGoodsItem } from '../../http/goodsAPI';
import SendPay from "../a-components/rt";
import { observer } from "mobx-react-lite";

const Banner = observer(() => {
    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(""); // ширина баннеар
    const [height, setHeight] = useState(""); // высота баннера
    const [density, setDensity] = useState("400-440"); // плотность баннера
    const [description, setDescription] = useState(""); // Телефон

    const [luvers, setLuvers] = useState("0"); // Телефон
    const [luversCoast, setLuversCoast] = useState("0"); // Телефон
    const [number, setNumber] = useState('1');

    // const [file, setFile] = useState(null); // Файл
    const name = "Баннер";

    // useEffect(() => {
    //     createGoodsItem().then(data => {
    //         setDevices(data.rows)
    //         setCount(data.count)
    //     }).catch((error) => { 
    //         console.log(error.response.data.message);
    //     });

    // }, [width, density, height, luvers, number]); // <- add the count variable here

    return (
        <>
        
            <Container>
                   <Row className="mb-5">

                        <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href="/banner">
                                <Card >
                                <Card.Img variant="top" src="/file/home/vizitki.jpg" />
                                <Card.Body>
                                    <Card.Title>Кружка - 450 р</Card.Title>
                                    {/* <Card.Text>
                                    Цена: 450 р.
                                    </Card.Text> */}
                                    {/* <Button variant="primary" href="#">Смотреть товар</Button> */}
                                </Card.Body>
                                </Card>
                            </a>
                        </Col>


                        <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href="/vizitki">
                            <Image src="/file/home/vizitki.jpg" thumbnail  className="img-mob"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={6}  lg={3} className="mb-3">
                            <a href="/samokleyka">
                            <Image src="/file/home/samokleyky.png" thumbnail className="img-mob" />
                            </a>
                        </Col>
                        <Col xs={12} sm={6}  lg={3} className="mb-3">
                            <a href="/samokleyka">
                            <Image src="/file/home/samokleyky.png" thumbnail  className="img-mob"/>
                            </a>
                        </Col>

                    </Row>
            </Container>
        </>
    );
});

export default Banner;
