import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchOneGoods } from '../../http/goodsAPI';

import { observer } from "mobx-react-lite";

const OneGoods = observer(() => {
    const [goodsItem, setGoodsItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchOneGoods( id ).then(data => {
            setGoodsItem(data)
        }).catch((e) => { 
            console.log(e.response.data.message, e);
        });

    }, []); // <- add the count variable here

    return (
        <>
            <Container>
                   <Row className="mb-5">
                        <Col xs={12} sm={6} lg={3} className="mb-3">
                            <a href="/banner">
                                <Card>
                                    <Card.Img variant="top" src={goodsItem.image} />
                                    <Card.Body>
                                        <Card.Title>{goodsItem.name}</Card.Title>
                                        <Card.Text>
                                        Цена: {goodsItem.price} р.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
            </Container>
        </>
    );
});

export default OneGoods;
