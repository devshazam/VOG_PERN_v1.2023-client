import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Pagination from 'react-bootstrap/Pagination';
import { ordersAdminList, deleteDevice } from '../../http/deviceAPI'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CashlessOrders from './component/CashlessOrders';


const AllOrdersAdmin = () => {
    const { user } = useContext(Context);

    const [itemSort, setItemSort] = useState('createdAt');
    const [orderSort, setOrderSort] = useState('ASC');
    const [page, setPage] = useState('1');
    const [flag, setFlag] = useState(1);

    const [devices, setDevices] = useState({});
    const [count, setCount] = useState(0);

    useEffect(() => {
        ordersAdminList({ itemSort, orderSort, page, userId: user.user.id }).then(data => {
            setDevices(data.rows)
            setCount(data.count)
        }).catch((error) => { 
            console.log('dev', error);
            alert('Ошибка 508 - Обратитесь к администратору!');
        });
    }, [itemSort, orderSort, page, flag])

    function choicePage(number){
        setPage(number);
    }

    let midlItem1 = Math.ceil(+count / 10 )
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

    // #########################################################################################
    return (
        <>

    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
            <Tab eventKey="home" title="Интернет оплата">
                <Container className="mb-3">
                        <Row>
                        <Col xs={12} lg ={3}>
                        <Form.Label>Элемент сортировки</Form.Label>
                                <Form.Select aria-label="Default select example" value={itemSort} onChange={e => setItemSort(e.target.value)}>
                                <option value="createdAt" >Дата</option>
                                <option value="name" >Названию товара</option>
                                </Form.Select>
                        </Col>
                        <Col xs={12} lg ={3}>
                        <Form.Label>Элемент сортировки</Form.Label>
                                <Form.Select aria-label="Default select example" value={orderSort}onChange={e => setOrderSort(e.target.value)}>
                                <option value="ASC" >По убыванию</option>
                                <option value="DESC" >По возрастанию</option>
                                </Form.Select>
                        </Col>

                        </Row>
                    </Container>
                    
                    <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID:</th>
                                <th>Цена:</th>
                                <th>Статус оплаты:</th>
                                <th>Дата создания:</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(devices).length ? 
                                devices.map((device) => (
                                    <tr key={device.id}>
                                        <td>{device.id}</td>
                                        <td>{device.value}</td>
                                        <td>
                                            {device.status ? (
                                                <p>оплачено</p>
                                            ) : (
                                                <p><span href='#' style={{fontSize: 18, color: 'red'}}>не оплачено</span>
                                                    <a href='#' >   - оплатить</a>
                                                </p>
                                            )}
                                        </td>
                                        <td>{device.createdAt.split('T')[0] + ' / ' + device.createdAt.split('T')[1].split('.')[0]}</td>
                                        <td><a href={"/admin/bar/"+device.id} >  подробнее</a></td>
                                    </tr>
                                ))
                            : 
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            }
                        </tbody>
                    </Table>

                        {paginationBasic}
                        </Container>
            </Tab>
            <Tab eventKey="cashless" title="Безналичный расчет">
                    <CashlessOrders />
            </Tab>

    </Tabs>


        </>
    );
};

export default AllOrdersAdmin;