import React, { useState, useEffect, useContext } from "react";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Pagination from "react-bootstrap/Pagination";
import { fetchOneGoods, changeGoodsParams } from "../../../http/goodsAPI";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import FloatingLabel from "react-bootstrap/FloatingLabel";

const ListOfGoods = () => {
    const [barcode, setBarcode] = useState("");
    const [price, setPrice] = useState("");
    const [priceImg, setPriceImg] = useState("");
    const [summa, setSumma] = useState("");
    const [goods, setGoods] = useState({});
    const [flag, setFlag] = useState(0);

    console.log(goods);
    useEffect(() => {
        if (barcode.length != 13) {
            setGoods({});
        } else {
            fetchOneGoods({ barcode })
                .then((data) => {
                    setGoods(data);
                })
                .catch((error) => {
                    if (error.response.data) {
                        alert(
                            `${error.response.data.message}${error.response.status}`
                        );
                    } else {
                        console.log("dev", error);
                        alert("Ошибка 122 - Обратитесь к администратору!");
                    }
                });
        }
    }, [barcode, flag]);

    useEffect(() => {
        if (Object.keys(goods).length == 0) {
            setPrice("");
            setPriceImg("");
            setSumma("");
        } else {
            setPrice(goods.price);
            setPriceImg(goods.price_img);
            setSumma(goods.summa);
        }
    }, [goods]);

    function callChangeGoodsParams() {
        changeGoodsParams({ goodsId: goods.id, price, priceImg, summa })
            .then((data) => {
                setFlag(flag + 1);
                alert("Изменения внесенны!");
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 123 - Обратитесь к администратору!");
                }
            });
    }

    // #########################################################################################
    return (
        <>
            <Row className="mb-3">
                <h3>
                    Обновить по Штрих-коду:{" "}
                    <span style={{ fontSize: 20 }}>
                        {Object.keys(goods).length !== 0 &&
                            `Цена: ${goods.price}; Цена с оформлением: ${goods.price_img}; Кол-во: ${goods.summa}`}
                    </span>
                </h3>
                <p></p>
                <Form.Group as={Col} md="3" className="mb-3">
                    <FloatingLabel
                        controlId="floatingBarcode"
                        label="Введите штрих-код"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Введите штрих-код"
                            onChange={(e) => setBarcode(e.target.value)}
                            value={barcode}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="3" className="mb-3">
                    <FloatingLabel
                        controlId="floatingPrice"
                        label="Введите цену"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Введите цену"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="3" className="mb-3">
                    <FloatingLabel
                        controlId="floatingPriceImg"
                        label="Введите цену с фото"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Введите цену с фото"
                            onChange={(e) => setPriceImg(e.target.value)}
                            value={priceImg}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="3" className="mb-3">
                    <FloatingLabel
                        controlId="floatingSumma"
                        label="Введите кол-во"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Введите кол-во"
                            onChange={(e) => setSumma(e.target.value)}
                            value={summa}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Button
                className="w-100 mb-3"
                variant="danger"
                onClick={callChangeGoodsParams}
            >
                Изменить
            </Button>
        </>
    );
};

export default ListOfGoods;
