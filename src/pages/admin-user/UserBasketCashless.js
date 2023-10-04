import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import CashlessTable from "./component/CashlessTable";
// import CashlessInputs from "./component/CashlessInputs";

import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import {
    fetchBasketDevices,
    paymentForCartItems,
    fetchRequisites,
} from "../../http/deviceAPI";

// получение всех товаров корзины + удаление элементов из корзины + оплата
const UserBasket = () => {
    const { helpers, user } = useContext(Context);

    const [devices, setDevices] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    // const [flag, setFlag] = useState(0);
    // const [requisites, setRequisites] = useState({});

    // useEffect(() => {
    //     fetchRequisites({id: user.user.id})
    //         .then((data) => {
    //             setRequisites(data)
    //             // setFlag(flag + 1)
    //         })
    //         .catch((error) => {
    //                 if(error.response.data){
    //                     alert(`${error.response.data.message}${error.response.status}`);
    //                 }else{
    //                     console.log('dev', error);
    //                     alert('Ошибка 132 - Обратитесь к администратору!');
    //                 }
    //         });
    // }, [ ]);

    // Загрузка всех заказов пользователя
    useEffect(() => {
        fetchBasketDevices({ userId: user.user.id })
            .then((data) => {
                setDevices(data);
                setTotalPrice(
                    data.reduce((total, num) => {
                        return total + Math.ceil(+num.price * 1.1 * 100) / 100;
                    }, 0)
                );
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 133 - Обратитесь к администратору!");
                }
            });
    }, [helpers.reloadBasket]);

    function payForBasket(value) {
        paymentForCartItems({ value, userId: user.user.id })
            .then((data) => {
                // console.log(data.id)
                window.location.href = data.confirmation.confirmation_url;
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 134 - Обратитесь к администратору!");
                }
            });
    }

    // #########################################################################################

    return (
        <>
            <Row className="mb-5">
                <Col xs={12} sm={{ span: 3, order: 2 }} className="mb-3">
                    <>
                        <h4 className="w-100 mb-3">
                            Итого: {totalPrice} руб. (вкл. 10%)
                        </h4>
                        <p>
                            ВНИМАНИЕ: в итоговую сумму вклучена наценка 10% за
                            безналичный расчет!
                        </p>
                        <Button
                            className="w-100 mb-3"
                            variant="danger"
                            onClick={() => payForBasket(totalPrice)}
                        >
                            Оплатить в Сбербанк Бизнес
                        </Button>
                    </>
                    {/* {
                    !requisites ?
                            <p>Кнопка оплаты появится после успешной отправки реквизитов.</p>
                            :
                            <><h4 className="w-100 mb-3">К оплате: {totalPrice} руб.</h4>
                            <Button className="w-100 mb-3"
                                variant="danger"
                                onClick={() => payForBasket(totalPrice)}
                            >Выставить счет 
                            </Button></>
                    } */}
                </Col>
                <Col xs={12} sm={{ span: 9, order: 1 }} className="mb-3">
                    <CashlessTable devices={devices} />
                    {/* { !requisites ?
                            <>
                                <h3>Введите данные своего юридического лица для выставления счета:</h3>
                                <CashlessInputs />
                            </>
                        :
                            <>
                                <p>Ваш ИНН: {requisites.inn};</p>
                                <CashlessTable
                                    devices={devices}
                                />
                            </>
                    } */}
                </Col>
            </Row>
        </>
    );
};

export default UserBasket;
