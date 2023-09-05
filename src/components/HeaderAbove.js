import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";

import Nav from "react-bootstrap/Nav";
import { observer } from "mobx-react-lite";
import { Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { reciveBasketCount } from "../http/deviceAPI";
import { fetchXslFile } from "../http/goodsAPI";

const HeaderAbove = observer(() => {
    const [basketNumber, setBasketNumber] = useState("0");
    const { helpers, user } = useContext(Context);

    useEffect(() => {
      if (!user.isAuth) { return; }
        reciveBasketCount(user.user.id)
            .then((res) => {
                // console.log(res);
                setBasketNumber(res);
            })
            .catch((error) => {
                console.log('dev', error);
                alert('Ошибка 501 - Обратитесь к администратору!');
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
                console.log('dev', error);
                alert('Ошибка 502 - Обратитесь к администратору!');
            });
    };

    return (
        <Container>
            <Row>
                <Col xs={12} lg={4}></Col>
                <Col xs={12} lg={{ span: 4, offset: 4 }}>
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
                                    <NavDropdown.Item onClick={showModalReview} >
                                        Оставить отзыв
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={logOut}>
                                        Выход
                                    </NavDropdown.Item>
                                    {user.user.role == "ADMIN" && (
                                        <>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/admin" className="redLink">
                                                Список заказов
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/admin/create" className="redLink">
                                                Создать товар
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={fetchXsl} className="redLink">
                                                Скачать XLS товаров
                                            </NavDropdown.Item>
                                        </>
                                    )}
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link href="/admin/bar">
                                        <Image
                                            src="/file/icons8-box-50.png"
                                            className="bascket_img"
                                            rounded
                                            alt="Заказы"
                                            title="Заказы"
                                        />
                                        <span className="bascket-num">
                                            {basketNumber}
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/admin/user-basket">
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
