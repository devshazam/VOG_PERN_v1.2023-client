import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import { fetchUsersOrders, checkPayStatus } from "../../http/deviceAPI";

// Таблица заказанных товаров
const CreatePrice = () => {
    const [newPrice, setNewPrice] = useState([{ a: '1', b: '2', c: '3'}, { a: '1', b: '2', c: '3'},{ a: '1', b: '2', c: '3'}]);


console.log(newPrice)
// Загрузка всех заказов пользователя
    useEffect(() => {
        // fetchUsersOrders({page: `${page}`, userId: `${user.user.id}`})
        //     .then((data) => {
        //         setOrders(data.rows);
        //         setCount(data.count);
        //     })
        //     .catch((error) => {
        //         console.log('dev', error);
        //         alert('Ошибка 512 - Обратитесь к администратору!');
        //     });
    }, []);

const handleSecondFriend = (fIndex, key, event) => {
    setNewPrice(
            newPrice.map((price, index) =>
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
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
                                    <td><input type="text" className="input-class" onChange={event => handleSecondFriend(index, item, event)} value={price[item]}></input></td>
                                
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
