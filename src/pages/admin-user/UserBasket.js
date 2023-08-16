import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";
import { fetchBasketDevices, payBasketList, deleteOneItem } from "../../http/deviceAPI";


// получение всех товаров корзины + удаление элементов из корзины + оплата
const UserBasket = () => {
    const { helpers, user } = useContext(Context);

    const [id, setId] = useState("0");
    const [filter, setFilter] = useState("Баннер");
    const [devices, setDevices] = useState({});
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [flag, setFlag] = useState(0);

    // Загрузка всех заказов пользователя
    useEffect(() => {
        fetchBasketDevices(user.user.id)
            .then((data) => {
                console.log(data)
                setDevices(data.rows);
                setCount(data.count);
                setTotalPrice(data.rows.reduce((total, num) => {
                    return total + +num.price;
                
                }, 0));
            })
            .catch((error) => {
                console.log("dev", error.response.data.message, error);
                alert("Ошибка 506 - Обратитесь к администратору!");
            });
    }, [ flag ]);

    function payForBasket(funcPrice) {
		payBasketList(funcPrice).then(data => {

                setFlag(flag + 1)
        }).catch((error) => { 
            console.log('dev', error.response.data.message, error);
            alert('Ошибка 506 - Обратитесь к администратору!');
        });
	}
    function removeOneItem(id) {
		deleteOneItem(id).then(data => {
            helpers.setReloadBasket(+helpers.reloadBasket + 1)
                setFlag(flag + 1)
        }).catch((error) => { 
            console.log('dev', error.response.data.message, error);
            alert('Ошибка 506 - Обратитесь к администратору!');
        });
	}

    
    // #########################################################################################

    return (
        <> <h2 className="mb-3">Ваши заказы:</h2>
            <Row className="mb-5">
                <Col xs={12} sm={{span: 3,  order: 2 }} className="mb-3">
                    <h4 className="w-100 mb-3">К оплате: {totalPrice} руб.</h4>
                        <Button className="w-100 mb-3"
                            variant="danger"
                            onClick={payForBasket}
                        >Оплатить 
                        </Button>
                     <p style={{fontSize: 12}}>Оплата производится с помощью сервиса онлайн платежей <a href="https://yoomoney.ru/">Юмани</a></p>
                </Col>
                <Col xs={12} sm={{span: 9,  order: 1 }} className="mb-3">
                   
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
                                        <td><Button variant="danger" onClick={() => removeOneItem(+device.id) }>Убрать</Button></td>
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
                </Col>
                
            </Row>
        </>
    );
};

export default UserBasket;
