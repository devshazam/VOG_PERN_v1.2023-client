import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Pagination from "react-bootstrap/Pagination";
import { changeDoneStatusToDone, ordersAdminList } from "../../http/deviceAPI";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import CashlessOrders from "./component/CashlessOrders";

const BaseOfOrders = () => {
    // const [itemSort, setItemSort] = useState('createdAt');
    // const [orderSort, setOrderSort] = useState('ASC');
    const [page, setPage] = useState("1");
    const [orders, setOrders] = useState({});
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(0);

    useEffect(() => {
        ordersAdminList({ page })
            .then((data) => {
                setOrders(data.rows);
                setCount(data.count);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 114 - Обратитесь к администратору!");
                }
            });
    }, [page, flag]);

    function choicePage(number) {
        setPage(number);
    }

    function callChangeDoneStatusToDone(orderId) {
        changeDoneStatusToDone({ orderId })
            .then((data) => {
                setFlag(flag + 1);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 115 - Обратитесь к администратору!");
                }
            });
    }

    let midlItem1 = Math.ceil(count / 10);
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
            {/* <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
            <Tab eventKey="home" title="Интернет оплата"> */}

            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID:</th>
                            <th>Цена:</th>
                            <th>Дата создания:</th>
                            <th>Нал./Без нал.</th>
                            <th>Статус оплаты:</th>
                            <th>Статус готовности:</th>
                            <th>Развернуть товары:</th>
                            <th>Действие:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(orders).length ? (
                            orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.value}</td>
                                    <td>
                                        {order.createdAt.split("T")[0] +
                                            " / " +
                                            order.createdAt
                                                .split("T")[1]
                                                .split(".")[0]}
                                    </td>
                                    <td>
                                        {order.cashless_status ? (
                                            <p>Без наличная</p>
                                        ) : (
                                            <p>Наличная</p>
                                        )}
                                    </td>
                                    <td>
                                        {order.status_pay ? (
                                            <p>оплачено</p>
                                        ) : (
                                            <p>
                                                <span
                                                    href="#"
                                                    style={{
                                                        fontSize: 18,
                                                        color: "red",
                                                    }}
                                                >
                                                    не оплачено
                                                </span>
                                                {/* <a href='#' >   - оплатить</a> */}
                                            </p>
                                        )}
                                    </td>
                                    <td>
                                        {order.status_done ? (
                                            <p>
                                                <span
                                                    href="#"
                                                    style={{
                                                        fontSize: 18,
                                                        color: "green",
                                                    }}
                                                >
                                                    {" "}
                                                    готово
                                                </span>
                                            </p>
                                        ) : (
                                            <p>
                                                <span
                                                    href="#"
                                                    style={{
                                                        fontSize: 18,
                                                        color: "red",
                                                    }}
                                                >
                                                    не готово
                                                </span>
                                                {/* <a href='#' >   - оплатить</a> */}
                                            </p>
                                        )}
                                    </td>
                                    <td>
                                        <a
                                            href={
                                                "/admin/base-of-orders/" +
                                                order.id
                                            }
                                        >
                                            {" "}
                                            подробнее
                                        </a>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                callChangeDoneStatusToDone(
                                                    order.id
                                                )
                                            }
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
                            </tr>
                        )}
                    </tbody>
                </Table>

                {paginationBasic}
            </Container>
            {/* </Tab>
            <Tab eventKey="cashless" title="Безналичный расчет">
                    <CashlessOrders />
            </Tab>

    </Tabs> */}
        </>
    );
};

export default BaseOfOrders;
