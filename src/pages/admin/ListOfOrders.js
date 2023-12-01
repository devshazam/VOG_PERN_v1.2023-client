import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import {
    fetchAllDevicesFromOneOrder,
    fetchUserByOrderId,
} from "../../http/deviceAPI";

//
const ListOfOrders = () => {
    const { orderId } = useParams();
    const [page, setPage] = useState(1);
    const [devices, setDevices] = useState([]);
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({});

    console.log(user);
    // Загрузка всех заказов пользователя
    useEffect(() => {
        fetchAllDevicesFromOneOrder({ orderId })
            .then((data) => {
                setDevices(data);
                setCount(data.length);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 118 - Обратитесь к администратору!");
                }
            });
    }, [page]);

    useEffect(() => {
        fetchUserByOrderId({ orderId })
            .then((data) => {
                if (data) {
                    setUser(data.user);
                }
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 119 - Обратитесь к администратору!");
                }
            });
    }, [page]);

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
            {user ? (
                <p>
                    Заказчик: {user.name} / {user.phone} / {user.email}
                </p>
            ) : (
                <p>Заказчик: </p>
            )}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Описание заказа</th>
                        <th>Описание </th>
                        <th>Картинка</th>
                        <th>Дата создания</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.length ? (
                        devices.map((device) => (
                            <tr key={device.id}>
                                <td>{device.name}</td>
                                <td>{device.feature}</td>
                                <td>{device.descriptionText}</td>
                                <td><a href={device.img}>Ссылка</a></td>
                                <td>
                                    {device.createdAt.split("T")[0] +
                                        " / " +
                                        device.createdAt
                                            .split("T")[1]
                                            .split(".")[0]}
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
                        </tr>
                    )}
                </tbody>
            </Table>

            {paginationBasic}
        </>
    );
};

export default ListOfOrders;
