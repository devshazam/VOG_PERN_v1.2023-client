import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../index";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";

// получение всех товаров корзины + удаление элементов из корзины + оплата
const CashlessOrder = () => {
    const { device } = useContext(Context);
    const [itemSort, setItemSort] = useState("createdAt");
    const [orderSort, setOrderSort] = useState("ASC");
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [midOne, setMidOne] = useState(1);

    const [id, setId] = useState("0");
    const [filter, setFilter] = useState("Баннер");

    const [devices, setDevices] = useState({});
    const [count, setCount] = useState(0);

    const userId = undefined;

    // useEffect(() => {
    //     fetchDevices(itemSort, orderSort, limit, page, filter, id, userId).then(data => {
    //         setDevices(data.rows)
    //         setCount(data.count)
    //     }).catch((error) => {
    // if(error.response.data){
    //     alert(`${error.response.data.message}${error.response.status}`);
    // }else{
    //     console.log('dev', error);
    //     alert('Ошибка 510 - Обратитесь к администратору!');
    // }
    //     });
    // }, [itemSort, orderSort, limit, page, midOne, id, filter])

    function doneItem(id) {
        // deleteDevice(id).then(data => {
        //         setMidOne(midOne + 1)
        // }).catch((error) => {
        // if(error.response.data){
        //     alert(`${error.response.data.message}${error.response.status}`);
        // }else{
        //     console.log('dev', error);
        //     alert('Ошибка 510 - Обратитесь к администратору!');
        // }
        // });
    }
    function choicePage(number) {
        setPage(number);
    }
    function findItem(event) {
        if (isNaN(event.target.value) || event.target.value == "") {
            alert("Строку должна содержать цифру ID!");
        } else {
            setId(event.target.value);
        }
    }

    console.log(devices);
    console.log();
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
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <Form.Label>Поиск по ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Миллиметры"
                            value={id}
                            onChange={findItem}
                        />
                        <Button
                            variant="outline-primary"
                            onClick={() => setId("0")}
                        >
                            Сбросить
                        </Button>
                    </Col>
                    <Col xs={12} lg={3}>
                        <Form.Label>Элемент сортировки</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={itemSort}
                            onChange={(e) => setItemSort(e.target.value)}
                        >
                            <option value="createdAt">Дата</option>
                            <option value="name">Названию товара</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} lg={3}>
                        <Form.Label>Элемент сортировки</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={orderSort}
                            onChange={(e) => setOrderSort(e.target.value)}
                        >
                            <option value="ASC">По убыванию</option>
                            <option value="DESC">По возрастанию</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12} lg={3}>
                        <Form.Label>Элемент сортировки</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="Баннер">Баннер</option>
                            <option value="Cамоклейка">Cамоклейка</option>
                            <option value="Визитки">Визитка</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID клиента</th>
                            <th>ID заказа</th>
                            <th>Имя</th>
                            <th>Описание заказа</th>
                            <th>Описание </th>
                            <th>Картинка</th>
                            <th>Статус Готовности и Оплаты</th>
                            <th>Дата создания</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(devices).length ? (
                            devices.map((device) => (
                                <tr key={device.id}>
                                    <td>{device.userId}</td>
                                    <td>{device.id}</td>
                                    <td>{device.name}</td>
                                    <td>{device.feature}</td>
                                    <td>{device.descriptionText}</td>

                                    <td>
                                        <a href={device.img}>
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

                                    <td>
                                        {device.createdAt.split("T")[0] +
                                            " / " +
                                            device.createdAt
                                                .split("T")[1]
                                                .split(".")[0]}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => doneItem(device.id)}
                                        >
                                            Выполнить
                                        </button>
                                    </td>
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
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                {paginationBasic}
            </Container>
        </>
    );
};

export default CashlessOrder;
