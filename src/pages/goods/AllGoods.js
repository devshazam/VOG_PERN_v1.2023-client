import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { fetchGoodsList } from '../../http/goodsAPI';
import { observer } from "mobx-react-lite";

const AllGoods = observer(() => {
    const [goodsCustom, setGoodsCustom] = useState({}); // цена товара - расчитаная
    const [count, setCount] = useState(0); // цена товара - расчитаная
    const [number, setNumber] = useState(0); // цена товара - расчитаная
    const [page, setPage] = useState(1); 

    let limit = 24;


    const { category } = useParams();

    useEffect(() => {
        fetchGoodsList( limit, page, category ).then(data => {
            setGoodsCustom(data.rows)
            setCount(data.count)
        }).catch((e) => { 
            console.log(e.response.data.message, e);
        });

    }, [ page ]); // <- add the count variable here

    function choicePage(number){
        setPage(number);
    }

    let midlItem1 = Math.ceil(count / limit)
    let items = [];
    for (let number = 1; number <= midlItem1; number++) {
    items.push(
        <Pagination.Item key={number} active={number === page} onClick={() => choicePage(number)}>
        {number}
        </Pagination.Item>,
    );
    }
    const paginationBasic = (
        <div>
        <Pagination>{items}</Pagination>

        </div>
    );

    return (
        <>
        
            <Container>
                   <Row className="mb-5">
                        {Object.keys(goodsCustom).length && goodsCustom.map(goods =>
                        <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href={"/goods/one/"+goods.id}>
                                <Card >
                                    <Card.Img variant="top" src={goods.image} />
                                    <Card.Body>
                                        <Card.Title>{goods.name} - {goods.price} р</Card.Title>
                                        <Card.Text>
                                        {goods.description}
                                        </Card.Text>
                                        {/* <Button variant="primary" href="#">Смотреть товар</Button> */}
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ) 
                    
                    }



{paginationBasic}

                    </Row>
            </Container>
        </>
    );
});

export default AllGoods;
