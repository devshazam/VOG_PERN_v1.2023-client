import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";
import { fetchBasketDevices, payBasketList, deleteOneItem } from "../../http/deviceAPI";


// получение всех товаров корзины + удаление элементов из корзины + оплата
const UserBasket = () => {
    const { helpers, user } = useContext(Context);
    
    const [devices, setDevices] = useState({});
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [flag, setFlag] = useState(0);
    const [ordersId, setOrdersId] = useState([]);


    console.log(ordersId)
    // Загрузка всех заказов пользователя
    useEffect(() => {
        fetchBasketDevices(user.user.id)
            .then((data) => {
                console.log(data)
                setDevices(data.rows);
                setCount(data.count);
                setTotalPrice(data.rows.reduce((total, num) => {
                    return total + Math.ceil(+num.price * 100) / 100;
                
                }, 0));
                setOrdersId(data.rows.map((item) => {
                    return +item.id;
                }))
            })
            .catch((error) => {
                console.log("dev", error);
                alert("Ошибка 513 - Обратитесь к администратору!");
            });
    }, [ flag ]);

    
    function removeOneItem(id) {
		deleteOneItem(id).then(data => {
            helpers.setReloadBasket(+helpers.reloadBasket + 1)
                setFlag(flag + 1)
        }).catch((error) => { 
            console.log('dev', error);
            alert('Ошибка 515 - Обратитесь к администратору!');
        });
	}

    console.log(totalPrice)
    // #########################################################################################

    return (
        <> 
                   
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Описание</th>
                                <th>Дата создания</th>
                                <th>Цена</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(devices).length ? 
                                <>
                                {devices.map((device) => (
                                    <tr key={device.id}>
                                        <td>{device.name}</td>
                                        <td>{device.feature}</td>
                                        <td>{device.createdAt.split('T')[0] + ' / ' + device.createdAt.split('T')[1].split('.')[0]}</td>
                                        <td>{device.price} руб.</td>
                                        <td><Button variant="danger" onClick={() => removeOneItem(device.id) }>Убрать</Button></td>
                                    </tr>
                                ))}
                                <tr>
                                    <td><b>ИТОГО:</b></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><b>{totalPrice} руб.</b></td>
                                </tr>
                            </>
                       
                         : (
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

        </>
    );
};

export default UserBasket;
