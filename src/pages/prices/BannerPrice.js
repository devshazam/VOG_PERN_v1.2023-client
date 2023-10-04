import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { fetchOnePrice, updatePriceTableD } from "../../http/goodsAPI";

const VizitsPrice = () => {
    const { user } = useContext(Context);

    const [newPrice, setNewPrice] = useState([]);
    const [note, setNote] = useState("");
    const [name, setName] = useState("");
    const [flag, setFlag] = useState(true);
    console.log(newPrice);

    // const coastOfBanner = [[550, 600], [500, 600], [400, 500], [350, 450], [300, 400], [280, 380], [240, 340]];
    // const coastOfGlue = 60;
    // const coastOfluvers = 15;

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
        fetchOnePrice({ priceId: 19 })
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
                    alert("Ошибка 143 - Обратитесь к администратору!");
                }
            });
    }, [flag]);

    const callCreatePriceTable = () => {
        updatePriceTableD({ name, note, price: newPrice })
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
                    alert("Ошибка 144 - Обратитесь к администратору!");
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
                            <td>До 1 м2</td>
                            <td>от 1-5 м2</td>
                            <td>от 5-10 м2</td>
                            <td>от 10-50 м2</td>
                            <td>от 50-100 м2</td>
                            <td>от 100-500 м2</td>
                            <td>от 500 м2</td>
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
                                                        <td>400-440</td>
                                                    </>
                                                )}
                                                {index === 1 && (
                                                    <>
                                                        <td>500</td>
                                                    </>
                                                )}
                                                {index !== 2 && (
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
                                            <td colSpan={8}>
                                                Цена люверса: {newPrice[2].a}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={8}>
                                                Цена проклейки 1 метра:{" "}
                                                {newPrice[2].b}
                                            </td>
                                        </tr>
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        {newPrice.map((price, index) => (
                                            <tr key={index}>
                                                {index === 0 && (
                                                    <>
                                                        <td>400-440</td>
                                                    </>
                                                )}
                                                {index === 1 && (
                                                    <>
                                                        <td>500</td>
                                                    </>
                                                )}
                                                {index !== 2 && (
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
                                            <td colSpan={8}>
                                                Цена люверса:{" "}
                                                <input
                                                    type="text"
                                                    className="input-class"
                                                    onChange={(event) =>
                                                        handleTable(
                                                            2,
                                                            "a",
                                                            event
                                                        )
                                                    }
                                                    value={newPrice[2].a}
                                                ></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={8}>
                                                Цена проклейки 1 метра:{" "}
                                                <input
                                                    type="text"
                                                    className="input-class"
                                                    onChange={(event) =>
                                                        handleTable(
                                                            2,
                                                            "b",
                                                            event
                                                        )
                                                    }
                                                    value={newPrice[2].b}
                                                ></input>
                                            </td>
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
