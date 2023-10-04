import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { fetchAllDevicesFromOneOrder } from "../../http/deviceAPI";

// Просмотр товаров одного заказа
const ListOfUserOrders = () => {
    const { orderId } = useParams();

    const [page, setPage] = useState(1);
    const [devices, setDevices] = useState({});
    const [count, setCount] = useState(0);

    // Загрузка всех товаров одного заказа пользователя
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
                    alert("Ошибка 126 - Обратитесь к администратору!");
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Описание заказа</th>
                        <th>Описание от клиента</th>
                        <th>Статус готовности</th>
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

                                <td>
                                    {device.status_done ? (
                                        <p>готово</p>
                                    ) : (
                                        <p>не готово</p>
                                    )}
                                </td>

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
                        </tr>
                    )}
                </tbody>
            </Table>

            {paginationBasic}
        </>
    );
};

export default ListOfUserOrders;
