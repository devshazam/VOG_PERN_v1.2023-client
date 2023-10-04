import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { fetchOnePrice, updatePriceTableC } from "../../http/goodsAPI";

const VizitsPrice = () => {
    const { user } = useContext(Context);

    const [newPrice, setNewPrice] = useState([]);
    const [note, setNote] = useState("");
    const [name, setName] = useState("");
    const [flag, setFlag] = useState(true);
    console.log(newPrice);
    const handleTable = (fIndex, key, event) => {
        if (event.target.value.length > 200) {
            alert("Превышена длина ячейки!");
            return;
        }
        setNewPrice(
            newPrice.map((price, index) =>
                fIndex == index
                    ? { ...price, [key]: event.target.value }
                    : { ...price }
            )
        );
    };

    useEffect(() => {
        fetchOnePrice({ priceId: 17 })
            .then((data) => {
                // console.log(data);
                setNewPrice(JSON.parse(data.value).price);
                setNote(JSON.parse(data.value).note);
                setName(JSON.parse(data.value).name);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 147 - Обратитесь к администратору!");
                }
            });
    }, [flag]);

    const callCreatePriceTable = () => {
        updatePriceTableC({ name, note, price: newPrice })
            .then((data) => {
                alert("Данные успешно сохранены!");
                window.location.reload();
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 148 - Обратитесь к администратору!");
                }
            });
    };

    const handleAdmin = () => {
        setFlag(false);
    };

    // #########################################################################################

    return (
        <>
            <div className="scroll-div">
                <h1>{name}</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Белая</td>
                            <td>Черная</td>
                            <td>Цветная</td>
                            <td>Дизайнерская</td>
                            <td>Фотолюминесцентная</td>
                            <td>Перфорированная</td>
                            <td>Прозрачная</td>
                            <td>Светоотражающая</td>
                        </tr>
                    </thead>
                    <tbody>
                        {newPrice.length === 0 ? (
                            <Spinner
                                className="vizits-price-spiner"
                                animation="border"
                            />
                        ) : (
                            <>
                                {flag ? (
                                    <>
                                        {" "}
                                        {newPrice.map((price, index) => (
                                            <tr key={index}>
                                                {index === 0 && (
                                                    <>
                                                        <td>До 1 м2</td>
                                                    </>
                                                )}
                                                {index === 1 && (
                                                    <>
                                                        <td>От 1 до 5 м2</td>
                                                    </>
                                                )}
                                                {index === 2 && (
                                                    <>
                                                        <td>От 5 до 10 м2</td>
                                                    </>
                                                )}
                                                {index === 3 && (
                                                    <>
                                                        <td>От 10 м2</td>
                                                    </>
                                                )}
                                                {index !== 4 && (
                                                    <>
                                                        {Object.keys(price).map(
                                                            (item, ind) => (
                                                                <td key={item}>
                                                                    {
                                                                        price[
                                                                            item
                                                                        ]
                                                                    }
                                                                </td>
                                                            )
                                                        )}
                                                    </>
                                                )}
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={9}>Порезка</td>
                                        </tr>
                                        <tr>
                                            <td>Без порезки</td>
                                            <td>А6</td>
                                            <td>А5</td>
                                            <td>А4</td>
                                            <td>А3</td>
                                            <td>А2</td>
                                            <td>А1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            {newPrice.map((price, index) => (
                                                <>
                                                    {index === 4 && (
                                                        <>
                                                            {Object.keys(
                                                                price
                                                            ).map(
                                                                (item, ind) => (
                                                                    <td
                                                                        key={
                                                                            item
                                                                        }
                                                                    >
                                                                        {
                                                                            price[
                                                                                item
                                                                            ]
                                                                        }
                                                                    </td>
                                                                )
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            ))}
                                            <td></td>
                                        </tr>
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        {newPrice.map((price, index) => (
                                            <tr key={index}>
                                                {index === 0 && (
                                                    <>
                                                        <td>До 1 м2</td>
                                                    </>
                                                )}
                                                {index === 1 && (
                                                    <>
                                                        <td>От 1 до 5 м2</td>
                                                    </>
                                                )}
                                                {index === 2 && (
                                                    <>
                                                        <td>От 5 до 10 м2</td>
                                                    </>
                                                )}
                                                {index === 3 && (
                                                    <>
                                                        <td>От 10 м2</td>
                                                    </>
                                                )}
                                                {index !== 4 && (
                                                    <>
                                                        {Object.keys(price).map(
                                                            (item, ind) => (
                                                                <td key={item}>
                                                                    <input
                                                                        type="text"
                                                                        className="input-class"
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleTable(
                                                                                index,
                                                                                item,
                                                                                event
                                                                            )
                                                                        }
                                                                        value={
                                                                            price[
                                                                                item
                                                                            ]
                                                                        }
                                                                    ></input>
                                                                </td>
                                                            )
                                                        )}
                                                    </>
                                                )}
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={9}>Порезка</td>
                                        </tr>
                                        <tr>
                                            <td>Без порезки</td>
                                            <td>А6</td>
                                            <td>А5</td>
                                            <td>А4</td>
                                            <td>А3</td>
                                            <td>А2</td>
                                            <td>А1</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            {newPrice.map((price, index) => (
                                                <>
                                                    {index === 4 && (
                                                        <>
                                                            {Object.keys(
                                                                price
                                                            ).map(
                                                                (item, ind) => (
                                                                    <>
                                                                        {Object.keys(
                                                                            price
                                                                        )
                                                                            .length -
                                                                            1 !==
                                                                            ind && (
                                                                            <td
                                                                                key={
                                                                                    item
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="text"
                                                                                    className="input-class"
                                                                                    onChange={(
                                                                                        event
                                                                                    ) =>
                                                                                        handleTable(
                                                                                            index,
                                                                                            item,
                                                                                            event
                                                                                        )
                                                                                    }
                                                                                    value={
                                                                                        price[
                                                                                            item
                                                                                        ]
                                                                                    }
                                                                                ></input>
                                                                            </td>
                                                                        )}
                                                                    </>
                                                                )
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            ))}
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </>
                                )}
                            </>
                        )}
                    </tbody>
                </Table>
                <p>{note}</p>

                {flag ? (
                    <>
                        {user.user.role == "ADMIN" && (
                            <Button variant="danger" onClick={handleAdmin}>
                                Изменить таблицу
                            </Button>
                        )}
                    </>
                ) : (
                    <Button variant="danger" onClick={callCreatePriceTable}>
                        Сохранить данные
                    </Button>
                )}
            </div>
        </>
    );
};

export default VizitsPrice;
