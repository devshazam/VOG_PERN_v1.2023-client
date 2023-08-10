import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import Pagination from "react-bootstrap/Pagination";

import { fetchDevices, deleteDevice } from "../../http/deviceAPI";
import { changeCredencials } from "../../http/userAPI";

import isEmail from 'validator/lib/isEmail';
//
const PrivateCab = () => {
    const { device, user } = useContext(Context);

    const [itemSort, setItemSort] = useState("createdAt");
    const [orderSort, setOrderSort] = useState("ASC");
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [midOne, setMidOne] = useState(1);

    const [id, setId] = useState("0");
    const [filter, setFilter] = useState("Баннер");
    const [devices, setDevices] = useState({});
    const [mail, setMail] = useState('');
    const [count, setCount] = useState(0);
    const [phone, setPhone] = useState('');



// Загрузка всех заказов ользователя
    useEffect(() => {
        fetchDevices(itemSort, orderSort, limit, page, id, filter, user.user.id)
            .then((data) => {
                setDevices(data.rows);
                setCount(data.count);
            })
            .catch((error) => {
                if (error) alert(error.response.data.message);
            });
    }, [itemSort, orderSort, limit, page, midOne, id, filter]);


    async function changeCred(){
        
        if(isEmail(mail)){
            try{const data = await changeCredencials(mail, phone)
                console.log('11-', data)
                alert('Данные успешно изменены!')
            }catch(e){
                console.log('00->changeCred->PrivateCab.js', e.code, e.message)
                alert('Ошибка Сервера - Обратитесь к администратору!')
            }
                window.location.reload();
        }else{
            alert("Не корректный email!")
        }
        
    }

    function choicePage(number){
        setPage(number);
    }

// ###############
    let midlItem1 = Math.ceil(count / limit);
    let items = [];
    for (let number = 1; number <= midlItem1; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => choicePage(number)}
            >
                {number}
            </Pagination.Item>
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
            <Container className="mb-3">
                <Row>
                    <p>Ваш ID: {user.user.id}; Ваш Email: {user.user.email}; Ваш Телефон: {user.user.phone}</p>
                    <Col xs={12} lg={6}>
                        <Form.Label>Введите новый email:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="email"
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Label>Введите новый телефон:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="+7 (999) 123-45-67"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Col>


                </Row>
                <div className="d-grid gap-2 m-3">
                            <Button variant="primary" size="lg" onClick={changeCred}>
                                Изменить данные
                            </Button>
                        </div>
            </Container>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Описание заказа</th>
                        <th>Описание</th>
                        <th>Описание Клиента</th>
                        <th>Картинка</th>
                        <th>Статус Готовности и Оплаты</th>
                        <th>Дата создания</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(devices).length ? (
                        devices.map((device) => (
                            <tr key={device.id}>
                                <td>{device.name}</td>
                                <td>{device.feature}</td>
                                <td>{device.descriptionText}</td>
                                <td>{device.userDescription}</td>

                                <td>
                                    <a
                                        href={  
                                            device.img
                                        }
                                    >
                                        {" "}
                                        Ссылка на картинку
                                    </a>
                                </td>
                                <td>
                                    {device.status_done ? (
                                        <p>готово</p>
                                    ) : (
                                        <p>не готово</p>
                                    )}
                                    <br></br>
                                    {device.status_pay ? (
                                        <p>оплачено</p>
                                    ) : (
                                        <p>не оплачено</p>
                                    )}
                                </td>

                                <td>{device.createdAt.split('T')[0] + ' / ' + device.createdAt.split('T')[1].split('.')[0]}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {paginationBasic}
        </>
    );
};

export default PrivateCab;
