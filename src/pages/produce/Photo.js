import React from "react";
// import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Photo = () => {




    // #########################################################################################

    return (
        <>
            <Container>
                <h1>Фото на документы</h1>
                <Row>
                    <Col xs={12} md={6} className="wrap-image">
                        <Image
                            src="/file/pic/qazw.jpg"
                            id="goods-image"
                            alt="Баннеры"
                            thumbnail
                        />
                    </Col>
                    <Col xs={12} lg={6} className="wrap-image">
                         <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Размер:</th>
                                        <th>Кол-во:</th>
                                        <th>Цветные:</th>
                                        <th>Черно-белые:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td colSpan={5} style={{textAlign: 'center'}}>
                                        Печатаем на матовой фотобумаге!
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Паспорт РФ*
                                    </td>
                                    <td>
                                        3,4х4,5
                                    </td>
                                    <td>
                                        4 шт
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                    <td>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Виза*
                                    </td>
                                    <td>
                                        3,4х4,5
                                    </td>
                                    <td>
                                        4 шт
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                    <td>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Виза США*
                                    </td>
                                    <td>
                                        5х5
                                    </td>
                                    <td>
                                        4 шт
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                    <td>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Загран. паспорт*
                                    </td>
                                    <td>
                                        3,4х4,5
                                    </td>
                                    <td>
                                        4 шт
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                    <td>
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Личное дело
                                    </td>
                                    <td>
                                        4х6
                                    </td>
                                    <td>
                                        4 шт
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Личное дело 
                                    </td>
                                    <td>
                                        9х12
                                    </td>
                                    <td>
                                        2 шт
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Типовая фотография**
                                    </td>
                                    <td>
                                        3х4
                                    </td>
                                    <td>
                                        4 шт
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                    <td>
                                        200 руб.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={5} style={{textAlign: 'center'}}>
                                        Монтаж одежды - 100 руб.
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={5} style={{textAlign: 'center'}}>
                                        Дополнительные фотографии - 10 руб./шт.
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            <p>* Требование к фото: размер головы не менее 80% от размера фотографии, лоб и уши должны быть открыты.</p>
                            <p>** на мед. комиссию, студенческий билет, пенсионное удостоверение, разрешение на работу, временную регистрацию, военный билет, разрешение на оружие.</p>

                    </Col>
                    </Row>
</Container>
        </>
    );
};

export default Photo;
