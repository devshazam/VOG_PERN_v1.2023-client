import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { createPriceTable } from "../../http/goodsAPI";

// Таблица заказанных товаров
const CreatePrice = () => {
    const [newPrice, setNewPrice] = useState([
        { a: "a", b: "b", c: "c" },
        { a: "a", b: "b", c: "c" },
        { a: "a", b: "b", c: "c" },
    ]);
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    // const [newPrice, setNewPrice] = useState([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
    const alfabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    console.log(newPrice);

    const handleTable = (fIndex, key, event) => {
        setNewPrice(
            newPrice.map((price, index) =>
                fIndex == index
                    ? { ...price, [key]: event.target.value }
                    : { ...price }
            )
        );
    };
    const addRow = () => {
        setNewPrice((prevFriends) => [
            ...prevFriends,
            prevFriends[prevFriends.length - 1],
        ]);
    };

    const addColumn = () => {
        setNewPrice(
            newPrice.map((price) => {
                return {
                    ...price,
                    [alfabet[Object.keys(price).length]]:
                        alfabet[Object.keys(price).length],
                };
            })
        );
    };

    const callCreatePriceTable = () => {
        createPriceTable({ name, note, price: newPrice })
            .then((data) => {
                alert("Данные успешно внесены!");
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 116 - Обратитесь к администратору!");
                }
            });
    };

    // #########################################################################################

    return (
        <>
            <h1>Создание прайса:</h1>

            <Table striped bordered hover>
                {/* <thead>
                    <tr>
                        <th>Цена</th>
                        <th>Наличная / Безналичная</th>
                        <th>Статус оплаты</th>
                        <th>Дата создания</th>
                        <th></th>
                    </tr>
                </thead> */}
                <tbody>
                    {newPrice.map((price, index) => (
                        <tr key={index}>
                            {Object.keys(price).map((item) => (
                                <td key={item}>
                                    <input
                                        type="text"
                                        className="input-class"
                                        onChange={(event) =>
                                            handleTable(index, item, event)
                                        }
                                        value={price[item]}
                                    ></input>
                                </td>
                            ))}
                        </tr>
                    ))}
                    {/* {
                        newPrice.map((price, index) => (
                            <tr key={index}>
                                {price.map((item, subIndex) => 
                                    (<>
                                    <td><input type="text" className="input-class" onChange={event => handleTable(index, subIndex, event)} value={item}></input></td>
                                
                                    </>))}
                            </tr>
                        ))
                    } */}
                </tbody>
            </Table>
            <Button variant="danger" onClick={addRow}>
                Добавить строку
            </Button>
            <Button variant="danger" onClick={addColumn}>
                Добавить колонку
            </Button>
            <Row className="mb-3">
                {/* TEXT */}
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Название:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="Ширина (мм):"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Примичание:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="Ширина (мм):"
                            onChange={(e) => setNote(e.target.value)}
                            value={note}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="danger" onClick={callCreatePriceTable}>
                    Создать
                </Button>
            </Row>
        </>
    );
};

export default CreatePrice;
