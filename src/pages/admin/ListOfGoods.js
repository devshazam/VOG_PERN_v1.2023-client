import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Pagination from "react-bootstrap/Pagination";
import { fetchListOfGoods } from "../../http/goodsAPI";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ChangeGoodsParams from "./component/ChangeGoodsParams";
import CashlessOrders from "./component/CashlessOrders";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import ProcentInput from "./component/ProcentInput";
import UpdateGoodsByXlsx from "./component/UpdateGoodsByXlsx";

const ListOfGoods = () => {
    const [barcode, setBarcode] = useState("");
    const [itemSort, setItemSort] = useState("createdAt");
    const [orderSort, setOrderSort] = useState("ASC");
    const [page, setPage] = useState("1");
    const [goods, setGoods] = useState([]);
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState("krujki");

    useEffect(() => {
        if (barcode !== "" && barcode.length != 13) return;
        fetchListOfGoods({ itemSort, orderSort, page, filter, barcode })
            .then((data) => {
                setGoods(data.rows);
                setCount(data.count);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 117 - Обратитесь к администратору!");
                }
            });
    }, [itemSort, orderSort, page, filter, barcode]);

    function choicePage(number) {
        setPage(number);
    }

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
            <ChangeGoodsParams />
            <Row className="mb-3">
                <Col xs={12} lg={4}>
                    <h4>Обновление товаров по XSLX</h4>
                    <UpdateGoodsByXlsx />
                </Col>
                <Col xs={12} lg={8}>
                    <h4>Обновление цен всех товаров на % по категориям</h4>
                    <ProcentInput />
                </Col>
            </Row>
            <Row className="mb-3">
                <h2>Фильтрация результатов:</h2>
                <Form.Group as={Col} md="3" className="mb-3">
                    <FloatingLabel
                        controlId="floatingBarcode"
                        label="Поиск по штрих-коду"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Ширина (мм):"
                            onChange={(e) => setBarcode(e.target.value)}
                            value={barcode}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group
                    as={Col}
                    md="3"
                    controlId="formGridState"
                    className="mb-3"
                >
                    <FloatingLabel
                        controlId="floatingFilter"
                        label="Категория товаров:"
                    >
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                        >
                            <option value="krujki">Кружки</option>
                            <option value="futbolki">Футболки</option>
                            <option value="bagety">Багетные рамки</option>
                            <option value="suveniry">
                                Сувенирная продукция
                            </option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group
                    as={Col}
                    md="3"
                    controlId="formGridState"
                    className="mb-3"
                >
                    <FloatingLabel
                        controlId="floatingItemSort"
                        label="Сортировать по:"
                    >
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setItemSort(e.target.value)}
                            value={itemSort}
                        >
                            <option value="price">Стоимости</option>
                            <option value="createdAt">Новизне</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group
                    as={Col}
                    md="3"
                    controlId="formGridState"
                    className="mb-3"
                >
                    <FloatingLabel
                        controlId="floatingOrderSort"
                        label="Порядок сортировки:"
                    >
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setOrderSort(e.target.value)}
                            value={orderSort}
                        >
                            <option value="ASC">Возрастание</option>
                            <option value="DESC">Убывание</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID:</th>
                            <th>Цена:</th>
                            <th>Цена с картинкой:</th>
                            <th>Описание:</th>
                            <th>Картинка:</th>
                            <th>Штрихкод:</th>
                            <th>Артикул:</th>
                            <th>Группа:</th>
                            <th>Кол-во:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {goods.length ? (
                            goods.map((good) => (
                                <tr key={good.id}>
                                    <td>{good.id}</td>
                                    <td>{good.price}</td>
                                    <td>{good.price_img}</td>
                                    <td>{good.name}</td>
                                    <td>
                                        <a href={good.image}>ссылка</a>
                                    </td>
                                    <td>{good.barcode}</td>
                                    <td>{good.artikul}</td>
                                    <td>{good.group}</td>
                                    <td>{good.summa}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                {paginationBasic}
            </Container>
        </>
    );
};

export default ListOfGoods;
