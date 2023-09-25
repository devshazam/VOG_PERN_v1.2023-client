import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";


import { fetchOnePrice } from "../../http/goodsAPI";

// Таблица заказанных товаров
const CreatePrice = () => {
    const { helpers, user } = useContext(Context);
    
    const [newPrice, setNewPrice] = useState([]);
    const [note, setNote] = useState('');
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(true);
console.log(newPrice)
console.log(user.user.role)
    const { priceId } = useParams();


    const handleTable = (fIndex, key, event) => {
        setNewPrice(
                newPrice.map((price, index) =>
                    fIndex == index
                        ? { ...price, [key]: event.target.value }
                        : { ...price }
                )
            );
    };

    useEffect(() => {
        fetchOnePrice({priceId}).then((data) => {
                console.log(data)
                setNewPrice(JSON.parse(data.value).price);
                setNote(JSON.parse(data.value).note);
                setName(JSON.parse(data.value).name);
                
            })
            .catch((error) => {
                console.log('dev', error);
                alert('Ошибка 512 - Обратитесь к администратору!');
            });
    }, []);


    // #########################################################################################

    return (
        <>
            <h1>{name}</h1>
            

            <Table striped bordered hover>

                <tbody>
                {flag ?
                        <>{newPrice.map((price, index) => (
                            <tr key={index}>
                                {Object.keys(price).map((item) => 
                                    (
                                        <td key={item}>{price[item]}</td>
                                        
                                        ))}
                            </tr>
                        ))}
                        {user.user.role == "ADMIN" &&
                        <Button variant="danger" onClick={handleTable} >Создать</Button> }</>
                        :
                        newPrice.map((price, index) => (
                            <tr key={index}>
                                {Object.keys(price).map((item) => 
                                    (
                                    <td  key={item}><input type="text" className="input-class" onChange={event => handleTable(index, item, event)} value={price[item]}></input></td>
                                
                                    ))}
                            </tr>
                        ))
                    }

                    //STOPer
                    {flag ? <>{user.user.role == "ADMIN" &&
                        <Button variant="danger" onClick={handleTable} >Создать</Button> }</>
                    :
                    "0"}
                </tbody>
            </Table>
<p>{note}</p>
            

        </>
    );
};

export default CreatePrice;
