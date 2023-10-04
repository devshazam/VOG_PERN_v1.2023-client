import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { fetchUsersOrders, checkPayStatus } from "../../http/deviceAPI";
import Spinner from "react-bootstrap/Spinner";

// Таблица заказанных товаров
const PrivateOffice = () => {
    const { helpers, user } = useContext(Context);
    const [page, setPage] = useState(1);
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(0);
    const [spiner, setSpiner] = useState(true);
    console.log(orders);

    // Загрузка всех заказов пользователя
    useEffect(() => {
        fetchUsersOrders({ page: `${page}`, userId: `${user.user.id}` })
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
                    alert("Ошибка 127 - Обратитесь к администратору!");
                }
            });
    }, [page, flag]);

    useEffect(() => {
        if (!orders.length) return;

        const fetchDataMid = async () => {
            for (let x of orders) {
                console.log(x.status_pay);
                if (x.status_pay == false) {
                    await checkPayStatus({ orderId: x.id });
                }
            }
            setFlag(flag + 1);
        };
        fetchDataMid()
            .then((data) => {

            }).catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 128 - Обратитесь к администратору!");
                }
            })
            .finally(() => {
                // выполниться в не зависимости от резуольтата
                helpers.setReloadBasket(+helpers.reloadBasket + 1);
                setSpiner(false);
            });
    }, [JSON.stringify(orders)]);

    function choicePage(number) {
        setPage(number);
    }

    // ###############
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
            <h1>Купленные товары:</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Цена</th>
                        <th>Наличная / Безналичная</th>
                        <th>Статус оплаты</th>
                        <th>Дата создания</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.value}</td>
                                <td>
                                    {order.cashless_status ? (
                                        <p>Без наличная</p>
                                    ) : (
                                        <p>Наличная</p>
                                    )}
                                </td>
                                <td>
                                    {spiner ? (
                                        <Spinner
                                            animation="border"
                                            variant="danger"
                                        />
                                    ) : (
                                        <>
                                            {order.status_pay ? (
                                                <p>
                                                    <span
                                                        href="#"
                                                        style={{
                                                            fontSize: 18,
                                                            color: "green",
                                                        }}
                                                    >
                                                        {" "}
                                                        оплачено
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
                                                        не оплачено
                                                    </span>
                                                    {/* <a href='#' >   - оплатить</a> */}
                                                </p>
                                            )}
                                        </>
                                    )}
                                </td>
                                <td>
                                    {order.createdAt.split("T")[0] +
                                        " / " +
                                        order.createdAt
                                            .split("T")[1]
                                            .split(".")[0]}
                                </td>
                                <td>
                                    <a
                                        href={
                                            "/admin/user/private-office/" +
                                            order.id
                                        }
                                    >
                                        {" "}
                                        подробнее
                                    </a>
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
        </>
    );
};

export default PrivateOffice;
