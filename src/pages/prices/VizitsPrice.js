import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { fetchOnePrice, updatePriceTable } from "../../http/goodsAPI";

const VizitsPrice = () => {
    const { user } = useContext(Context);

    const [newPrice, setNewPrice] = useState([]);
    const [note, setNote] = useState("");
    const [name, setName] = useState("");
    const [flag, setFlag] = useState(true);

    const handleTable = (fIndex, key, event) => {
        if(event.target.value.length > 200){alert('Превышена длина ячейки!'); return}
        setNewPrice(
            newPrice.map((price, index) =>
                fIndex == index
                    ? { ...price, [key]: event.target.value }
                    : { ...price }
            )
        );
    };

    useEffect(() => {
        fetchOnePrice({ priceId: 14 })
            .then((data) => {
                // console.log(data);
                setNewPrice(JSON.parse(data.value).price);
                setNote(JSON.parse(data.value).note);
                setName(JSON.parse(data.value).name);
            })
            .catch((error) => {
                console.log("dev", error);
                alert("Ошибка 512 - Обратитесь к администратору!");
            });
    }, [flag]);

    const callCreatePriceTable = () => {
        updatePriceTable({ name, note, price: newPrice, priceId: 15 })
            .then((data) => {
                alert('Данные успешно сохранены!')
                window.location.reload();
            })
            .catch((error) => {
                console.log("dev", error);
                alert("Ошибка 512 - Обратитесь к администратору!");
            });
    };

    const handleAdmin = () => {
        setFlag(false);
    };

    // #########################################################################################

    return (
        <>
            <h1>{name}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Сторонность:</td>
                        <td>Вид:</td>
                        <td>Ламинация:</td>
                        <td>96 шт</td>
                        <td>204 шт</td>
                        <td>500 шт</td>
                        <td>1000 шт</td>
                    </tr>
                </thead>
                <tbody>

                    {flag ? 


                        newPrice.map((price, index) => (
                            <tr key={index}>
                                    {index === 0 && <><td rowSpan='9'>Односторонние</td><td rowSpan='3'>Матовые</td></>}
                                    {index === 3 && <td rowSpan='3'>Глянцевые</td>}
                                    {index === 6 && <td rowSpan='3'>Дизайнерские</td>}
                                    {index === 9 && <><td rowSpan='9'>Двусторонние</td><td rowSpan='3'>Матовые</td></>}
                                    {index === 12 && <td rowSpan='3'>Глянцевые</td>}
                                    {index === 15 && <td rowSpan='3'>Дизайнерские</td>}
                                    {( index === 0 || index === 3 || index === 6 || index === 9 || index === 12 || index === 15 )  && <td>Без ламинации</td>}
                                    {( index === 1 || index === 4 || index === 7 || index === 10 || index === 13 || index === 16 )  && <td>Глянцевая</td>}
                                    {( index === 2 || index === 5 || index === 8 || index === 11 || index === 14 || index === 17 )  && <td>Матовая</td>}

                                {Object.keys(price).map((item) => (
                                    <td key={item}>{price[item]}</td>
                                ))}
                                </tr>
                        ))


                      
                    : 
                            newPrice.map((price, index) => (
                                <tr key={index}>
                                    {index === 0 && <><td rowSpan='9'>Односторонние</td><td rowSpan='3'>Матовые</td></>}
                                    {index === 3 && <td rowSpan='3'>Глянцевые</td>}
                                    {index === 6 && <td rowSpan='3'>Дизайнерские</td>}
                                    {index === 9 && <><td rowSpan='9'>Двусторонние</td><td rowSpan='3'>Матовые</td></>}
                                    {index === 12 && <td rowSpan='3'>Глянцевые</td>}
                                    {index === 15 && <td rowSpan='3'>Дизайнерские</td>}
                                    {( index === 0 || index === 3 || index === 6 || index === 9 || index === 12 || index === 15 )  && <td>Без ламинации</td>}
                                    {( index === 1 || index === 4 || index === 7 || index === 10 || index === 13 || index === 16 )  && <td>Глянцевая</td>}
                                    {( index === 2 || index === 5 || index === 8 || index === 11 || index === 14 || index === 17 )  && <td>Матовая</td>}

                                    {Object.keys(price).map((item) => (
                                        <td key={item}>
                                            <input
                                                type="text"
                                                className="input-class"
                                                onChange={(event) =>
                                                    handleTable(
                                                        index,
                                                        item,
                                                        event
                                                    )
                                                }
                                                value={price[item]}
                                            ></input>
                                        </td>
                                    ))}
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
            <p>{note}</p>

            {flag ? 

                    <>{user.user.role == "ADMIN" && (
                        <Button variant="danger" onClick={handleAdmin}>
                            Изменить таблицу
                        </Button>
                    )}</>
            :
                <Button
                    variant="danger"
                    onClick={callCreatePriceTable}
                >
                    Сохранить данные
                </Button>
              
            }
        </>
    );
};

export default VizitsPrice;
