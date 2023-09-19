import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { fetchUsersOrders, checkPayStatus } from "../../http/deviceAPI";

// Таблица заказанных товаров
const CreatePrice = () => {
    const [newPrice, setNewPrice] = useState([{ a: '1', b: '2', c: '3'}, { a: '1', b: '2', c: '3'},{ a: '1', b: '2', c: '3'}]);

console.log(newPrice)

const handleTable = (fIndex, key, event) => {
    setNewPrice(
            newPrice.map((price, index) =>
                fIndex == index
                    ? { ...price, [key]: event.target.value }
                    : { ...price }
            )
        );
    };


    // #########################################################################################

    return (
        <>
            <h1>Купленные товары:</h1>
            

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
                    {
                        newPrice.map((price, index) => (
                            <tr key={index}>
                                {Object.keys(price).map((item) => 
                                    (<>
                                    <td><input type="text" className="input-class" onChange={event => handleTable(index, item, event)} value={price[item]}></input></td>
                                
                                    </>))}
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </>
    );
};

export default CreatePrice;
