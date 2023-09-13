import React, { useState, useEffect, useContext } from "react";

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Pagination from 'react-bootstrap/Pagination';
import { fetchListOfGoods } from '../../../http/goodsAPI'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FloatingLabel from 'react-bootstrap/FloatingLabel';


const ListOfGoods = () => {
    const [barcode, setBarcode] = useState('');
    const [itemSort, setItemSort] = useState('createdAt');
    const [orderSort, setOrderSort] = useState('ASC');
    const [page, setPage] = useState('1');
    const [goods, setGoods] = useState([]);
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('krujki');

    useEffect(() => {
        if(barcode !== '' && barcode.length != 13) return;
        fetchListOfGoods({ itemSort, orderSort, page, filter, barcode  }).then(data => {
            setGoods(data.rows)
            setCount(data.count)
        }).catch((error) => { 
            console.log('dev', error);
            alert('Ошибка 508 - Обратитесь к администратору!');
        });
    }, [ itemSort, orderSort, page, filter, barcode ])




    // #########################################################################################
    return (
        <>

                <Row className="mb-3">
                    <h3 >Обновить по Штрих-коду:</h3 >
                    <Form.Group as={Col} md="3" className="mb-3">
                        <FloatingLabel controlId="floatingBarcode" label="Введите штрих-код"> 
                        <Form.Control
                            type="text"
                            placeholder="Ширина (мм):"
                            onChange={(e) => setBarcode(e.target.value)}
                            value={barcode}
                        /> 
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridState" className="mb-3">
                        <FloatingLabel controlId="floatingPassword" label="Категория товаров:">
                            <Form.Select aria-label="Default select example" onChange={(e) => setFilter(e.target.value)} value={filter}>
                                        <option value="krujki">Кружки</option>
                                        <option value="futbolki">Футболки</option>
                                        <option value="bagety">Багетные рамки</option>
                                        <option value="suveniry">Сувенирная продукция</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridState" className="mb-3">
                        <FloatingLabel controlId="floatingPassword" label="Сортировать по:">
                            <Form.Select aria-label="Default select example" onChange={(e) => setItemSort(e.target.value)} value={itemSort}>
                                        <option value="price">Стоимости</option>
                                        <option value="createdAt">Новизне</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridState" className="mb-3">
                        <FloatingLabel controlId="floatingPassword" label="Порядок сортировки:">  
                                <Form.Select aria-label="Default select example" onChange={(e) => setOrderSort(e.target.value)} value={orderSort}>
                                            <option value="ASC">Возрастание</option>
                                            <option value="DESC">Убывание</option>
                                </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    
                </Row>


        </>
    );
};

export default ListOfGoods;