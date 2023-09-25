import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";


import { fetchOnePrice } from "../../http/goodsAPI";

// Таблица заказанных товаров
const CreatePrice = () => {
    const [newPrice, setNewPrice] = useState([]);
    // const [note, setNote] = useState('');
    // const [name, setName] = useState('');
console.log(newPrice)

    const { priceId } = useParams();




    useEffect(() => {
        fetchOnePrice({priceId: [1,2]}).then((data) => {
                console.log(data)
                setNewPrice(data);
                // setNote(JSON.parse(data.value).note);
                // setName(JSON.parse(data.value).name);
                
            })
            .catch((error) => {
                console.log('dev', error);
                alert('Ошибка 512 - Обратитесь к администратору!');
            });
    }, []);


    // #########################################################################################

    return (
        <>
            
            

            
                    
                    
                {
                newPrice.map((itemPrice, index) => (
                    <div key={index}>
                        <h1>{JSON.parse(itemPrice.value).name}</h1>
                        <Table striped bordered hover>
                            <tbody>
                            
                                    {
                                        JSON.parse(itemPrice.value).price.map((price, index) => (
                                            
                                                <tr key={index}>
                                                    {Object.keys(price).map((item) => 
                                                        (
                                                        <td key={item}>{price[item]}</td>
                                                    
                                                        ))}
                                                </tr>


                                        ))
                                    }
                                </tbody>
                        </Table>

                            <p>{JSON.parse(itemPrice.value).note}</p>
                    </div>
                ))}
                    
                    
                   
             
            

        </>
    );
};

export default CreatePrice;
