import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


import { fetchGoodsList, deleteItemByID } from '../../http/goodsAPI';
import { observer } from "mobx-react-lite";

const AllGoods = observer(() => {
    const { user} = useContext(Context)
    const { category } = useParams();
    const [goodsCustom, setGoodsCustom] = useState({}); // цена товара - расчитаная
    const [count, setCount] = useState(0); // цена товара - расчитаная
    const [number, setNumber] = useState(0); // цена товара - расчитаная
    const [page, setPage] = useState(1); 
    const [flag, setFlag] = useState(1);
    const [categoryIt, setCategoryIt] = useState(category);
    const [itemSort, setItemSort] = useState('createdAt');
    const [orderSort, setOrderSort] = useState('ASC');
    let limit = 24;

    useEffect(() => {
            fetchGoodsList( limit, page, categoryIt, itemSort, orderSort ).then(data => {
                setGoodsCustom(data.rows)
                setCount(data.count)
            }).catch((e) => { 
                console.log(e.response.data.message, e);
            });

    }, [ page, flag, categoryIt, itemSort, orderSort  ]); // <- add the count variable here

    function choicePage(number){
        setPage(number);
    }

    async function deleteItem (id){

        deleteItemByID(id).then(data => {
            console.log("dev", "Товар удален!");
            setFlag(flag + 1);
        }).catch((error) => { 
            console.log('dev', error);
             alert('Ошибка 506 - Обратитесь к администратору!');
        });

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
        
            <Row className="mb-5">
                <Col xs={12} sm={3} lg={3} className="mb-3" >
                    <Form.Group as={Col} md="12" controlId="formGridState" className="mb-3">
                        <FloatingLabel controlId="floatingPassword" label="Категория товаров:">
                            <Form.Select aria-label="Default select example" onChange={(e) => setCategoryIt(e.target.value)} value={categoryIt}>
                                        <option value="krujki">Кружки</option>
                                        <option value="futbolki">Футболки</option>
                                        <option value="bagety">Багетные рамки</option>
                                        <option value="suveniry">Сувенирная продукция</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="formGridState" className="mb-3">
                        <FloatingLabel controlId="floatingPassword" label="Сортировать по:">
                            <Form.Select aria-label="Default select example" onChange={(e) => setItemSort(e.target.value)} value={itemSort}>
                                        <option value="price">Стоимости</option>
                                        <option value="createdAt">Новизне</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="formGridState" className="mb-3">
                        <FloatingLabel controlId="floatingPassword" label="Порядок сортировки:">  
                                <Form.Select aria-label="Default select example" onChange={(e) => setOrderSort(e.target.value)} value={orderSort}>
                                            <option value="ASC">Возрастание</option>
                                            <option value="DESC">Убывание</option>
                                </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    
                </Col>
                <Col xs={12} sm={9} lg={9} className="mb-3" >
                        <Row className="mb-5">
                                {Object.keys(goodsCustom).length ? goodsCustom.map(goods =>
                                <Col xs={12} sm={6} lg={3} className="mb-3" key={goods.id}>
                                        <Card >
                                            <a href={"/goods/one/"+goods.id}>
                                                <Card.Img variant="top" src={goods.image} />
                                            </a>
                                            <Card.Body>
                                                <Card.Title>{goods.name}</Card.Title>
                                                <Card.Text>
                                                Цена: {goods.price} р
                                                </Card.Text>
                                                {user.user.role == 'ADMIN' && 
                                                <>
                                                <Button className="m-2" variant="danger" href="#" onClick={() => deleteItem(goods.id)}>Удалить</Button>
                                                <Button variant="primary" href={"/goods/one-update/"+goods.id}>Править</Button>
                                                </>
                                                }
                                            </Card.Body>
                                        </Card>
                                    
                                </Col>
                                )  : <h2>Нет товаров</h2>
                            }
                            {paginationBasic}

                            </Row>
                </Col>
            </Row>
        
        </>
    );
});

export default AllGoods;
