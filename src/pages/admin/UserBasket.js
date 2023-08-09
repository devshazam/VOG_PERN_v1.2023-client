import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";

import { fetchBasketDevices } from "../../http/deviceAPI";

// получение всех товаров корзины + удаление элементов из корзины + оплата 
const UserBasket = () => {
    const { device, user } = useContext(Context);

    const [id, setId] = useState("0");
    const [filter, setFilter] = useState("Баннер");
    const [devices, setDevices] = useState({});



// Загрузка всех заказов ользователя
    useEffect(() => {
        fetchBasketDevices( user.user.id ) 
            .then((data) => {
                setDevices(data.rows);
                setCount(data.count);
            })
            .catch((error) => {
                console.log('dev', error.response.data.message, error);
                alert('Ошибка 506 - Обратитесь к администратору!');
            });
    }, [ ]);


    // #########################################################################################

    return (
        <>

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

                                <td>{device.createdAt}</td>
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
        </>
    );
};

export default UserBasket;
