import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";

import Nav from "react-bootstrap/Nav";
import { observer } from "mobx-react-lite";
import { Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { reciveBasketCount, reciveOrderCount } from "../http/deviceAPI";
import { fetchXslFile } from "../http/goodsAPI";
import BanButton from "./BanButton";

const HeaderAbove = observer(() => {
    const [basketNumber, setBasketNumber] = useState("0");
    const [orderNumber, setOrderNumber] = useState("0");
    const { helpers, user } = useContext(Context);

    useEffect(() => {
        if (!user.isAuth) {
            return;
        }
        reciveBasketCount({ userId: user.user.id })
            .then((data) => {
                setBasketNumber(data);
            }).catch((error) => {
                if(error.response.data){
                    alert(`${error.response.data.message}${error.response.status}`);
                }else{
                    console.log('dev', error);
                    alert('Ошибка 104 - Обратитесь к администратору!');
                }
            });
            
        reciveOrderCount({ userId: user.user.id })
            .then((data) => {
                setOrderNumber(data);
            }).catch((error) => {
                if(error.response.data){
                    alert(`${error.response.data.message}${error.response.status}`);
                }else{
                    console.log('dev', error);
                    alert('Ошибка 105 - Обратитесь к администратору!');
                }
            });
    }, [helpers.reloadBasket]);

    const showModalLogin = () => {
        helpers.setModalLogin(true);
    };
    const showModalRegistration = () => {
        helpers.setModalRegistration(true);
    };
    const showModalReview = () => {
        helpers.setModalReview(true);
    };
    const changeUserCred = () => {
        helpers.setModalUserCred(true);
    };

    const logOut = () => {
        user.setIsAuth(false);
        user.setUser({});
        localStorage.removeItem("token");
        window.location.reload();
    };

    const fetchXsl = () => {
        fetchXslFile()
            .then((data) => {
                document.location.href = data.fileLocation;
            })
            .catch((error) => {
                if(error.response.data){
                    alert(`${error.response.data.message}${error.response.status}`);
                }else{
                    console.log('dev', error);
                    alert('Ошибка 106 - Обратитесь к администратору!');
                }
            });
    };

    return (
        <Container>
            <Row>
                <Col xs={12} lg={4}></Col>
                <Col xs={12} lg={{ span: 6, offset: 2 }}>
                    <Nav
                        style={{
                            justifyContent: "right",
                            position: "relative",
                            zIndex: 1021,
                        }}
                    >
                        {user.isAuth ? (
                            <>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={user.user.email}
                                >
                                    <NavDropdown.Item onClick={changeUserCred}>
                                        Изменить данные
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={showModalReview}>
                                        Оставить отзыв
                                    </NavDropdown.Item>

                                    <NavDropdown.Item onClick={logOut}>
                                        Выход
                                    </NavDropdown.Item>
                                    {user.user.role == "ADMIN" && (
                                        <>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item
                                                href="/admin/base-of-orders"
                                                className="redLink"
                                            >
                                                База заказов
                                            </NavDropdown.Item>
                                            <NavDropdown.Item
                                                href="/admin/list-of-goods"
                                                className="redLink"
                                            >
                                                База товаров
                                            </NavDropdown.Item>
                                            <NavDropdown.Item
                                                href="/admin/create"
                                                className="redLink"
                                            >
                                                Создать товар
                                            </NavDropdown.Item>
                                            <NavDropdown.Item
                                                href="/admin/create-price"
                                                className="redLink"
                                            >
                                                Создать прайс
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item
                                                onClick={fetchXsl}
                                                className="fioLink"
                                            >
                                                Скачать базу товаров (xlsx)
                                            </NavDropdown.Item>
                                            <BanButton />
                                        </>
                                    )}
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link href="/admin/user/private-office">
                                        <Image
                                            src="/file/icons8-box-50.png"
                                            className="bascket_img"
                                            rounded
                                            alt="Заказы"
                                            title="Заказы"
                                        />
                                        <span className="bascket-num">
                                            {orderNumber}
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/admin/user/basket">
                                        <Image
                                            src="/file/icons8-basket-50.png"
                                            className="bascket_img"
                                            rounded
                                            alt="Корзина"
                                            title="Корзина"
                                        />
                                        <span className="bascket-num">
                                            {basketNumber}
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                            </>
                        ) : (
                            <>
                                <Nav.Item>
                                    <Nav.Link onClick={showModalLogin}>
                                        Вход
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={showModalRegistration}>
                                        Регистрация
                                    </Nav.Link>
                                </Nav.Item>
                            </>
                        )}
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
});

export default HeaderAbove;
