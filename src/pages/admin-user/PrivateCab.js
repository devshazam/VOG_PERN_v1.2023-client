import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { fetchUsersOrders } from "../../http/deviceAPI";

// Таблица заказанных товаров
const PrivateCab = () => {
    const { user } = useContext(Context);
    const [page, setPage] = useState(1);
    const [devices, setDevices] = useState({});
    const [count, setCount] = useState(0);

// Загрузка всех заказов пользователя
    useEffect(() => {
        fetchUsersOrders({page: `${page}`, userId: `${user.user.id}`})
            .then((data) => {
                setDevices(data.rows);
                setCount(data.count);
            })
            .catch((error) => {
                console.log('dev', error);
                alert('Ошибка 512 - Обратитесь к администратору!');
            });
    }, [page]);

    function choicePage(number){
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
                        <th>Статус оплаты</th>
                        <th>Дата создания</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(devices).length ? 
                        devices.map((device) => (
                            <tr key={device.id}>
                                <td>{device.value}</td>
                                <td>
                                    {device.status ? (
                                        <p>оплачено</p>
                                    ) : (
                                        <p><a href='#'>не оплачено</a></p>
                                    )}
                                </td>
                                <td>{device.createdAt.split('T')[0] + ' / ' + device.createdAt.split('T')[1].split('.')[0]}</td>
                            </tr>
                        ))
                     : 
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                </tbody>
            </Table>

            {paginationBasic}
        </>
    );
};

export default PrivateCab;
