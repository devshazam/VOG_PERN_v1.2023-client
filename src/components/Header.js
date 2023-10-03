import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Accordion from 'react-bootstrap/Accordion';


const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary mb-3" sticky="top">
                <Container>
                    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}

                    <Navbar.Brand href="/">
                        <img
                            src="/file/logo.png"
                            width="200"
                            height="46"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            id="logo-file"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="justify-content-between">
                            <Nav className="justify-content-end  pe-3 my-2 my-lg-0">
                                <NavDropdown
                                    title="Заказать товары"
                                    id="offcanvasNavbarDropdown-expand-lg"
                                >
                                    <NavDropdown.Item href="/produce/vizitki">
                                        Визитки
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/produce/banner">
                                        Баннеры
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/produce/samokleyka">
                                        Самоклейки
                                    </NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                </NavDropdown>

                                <NavDropdown
                                    title="Купить товары"
                                    id="offcanvasNavbarDropdown-expand-lg"
                                >
                                   <NavDropdown.Item href="/goods/futbolki">
                                        Футболки
                                    </NavDropdown.Item>
                                     <NavDropdown.Item href="/goods/krujki">
                                        Кружки
                                    </NavDropdown.Item>
                                     <NavDropdown.Item href="/goods/bagety">
                                        Багетные рамки
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/goods/planketki">
                                        Плакетки
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/goods/shtender">
                                        Штендеры
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/goods/magnit">
                                        Магнитики
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/goods/brelok">
                                        Брелоки
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/goods/plenka">
                                        Пленка AVERY
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/goods/3d-nit">
                                        Нить для 3D печати
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/goods/stands">
                                        Информационные стенды
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    title="Прайсы услуг"
                                    id="offcanvasNavbarDropdown-expand-lg"
                                >
                                    <NavDropdown.Item href="/prices/vizits-price">
                                        Визитки
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/prices/samokleyka-price">
                                        Самоклейка
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/prices/banner-price">
                                        Баннеры
                                    </NavDropdown.Item>
                                    <Accordion defaultActiveKey="0" className="menu-accordion">
                                        <Accordion.Item eventKey="1" className="item-accordion">
                                            <Accordion.Header>Ламинация</Accordion.Header>
                                            <Accordion.Body>
                                                <NavDropdown.Item href="/prices/1">
                                                    Ламинация листовая (глянец)
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/prices/2">
                                                    Ламинация листовая (матовая)
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/prices/4">
                                                    Глянцевая рулонная ламинация
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/prices/5">
                                                    Матовая рулонная ламинация
                                                </NavDropdown.Item>
                                    
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="0" className="menu-accordion">
                                        <Accordion.Item eventKey="1" className="item-accordion">
                                            <Accordion.Header>Копирование</Accordion.Header>
                                            <Accordion.Body>
                                                <NavDropdown.Item href="/prices/6">
                                                    Сканирование
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/prices/7">
                                                    Распечатка текста и чертежей
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/prices/8">
                                                    Ксерокопия
                                                </NavDropdown.Item>
                                    
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <Accordion defaultActiveKey="0" className="menu-accordion">
                                        <Accordion.Item eventKey="1" className="item-accordion">
                                            <Accordion.Header>Печать</Accordion.Header>
                                            <Accordion.Body>
                                            <NavDropdown.Item href="/prices/11">
                                                Лазерная печать А4, А3
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/prices/12">
                                                Струйная печать, глянцевая бумага
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/prices/13">
                                                Струйная печать, матовая бумага
                                            </NavDropdown.Item>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <NavDropdown.Item href="/prices/9">
                                        Печать на холсте
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/prices/10">
                                        Тиражирование на ризографе
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/prices/18">
                                        Значки
                                    </NavDropdown.Item>
                                    
                                </NavDropdown>

                                {/* <Nav.Link href="/goods/krujki">Кружки</Nav.Link> */}
                                {/* <Nav.Link href="/goods/kancelyariya">Канцелярия</Nav.Link> */}
                                <Nav.Link href="/3d-details">
                                    <Image
                                        src="/file/icons8-3d-50.jpg"
                                        className="bascket_img"
                                        rounded
                                        alt="Заказы"
                                        title="Заказы"
                                    /> 3D детали
                                </Nav.Link>
                                <Nav.Link href="/contacts">Контакты</Nav.Link>
                            </Nav>
                            <Navbar.Text>
                                <span className="label">
                                    г. Волгоград       
                                </span>
                            </Navbar.Text>
                            {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
