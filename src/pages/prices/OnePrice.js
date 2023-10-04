import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { fetchOnePrice, updatePriceTable } from "../../http/goodsAPI";

const CreatePrice = () => {
    const { user } = useContext(Context);
    const { priceId } = useParams();

    const [newPrice, setNewPrice] = useState([]);
    const [note, setNote] = useState("");
    const [name, setName] = useState("");
    const [flag, setFlag] = useState(true);

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
        fetchOnePrice({ priceId })
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
                    alert("Ошибка 145 - Обратитесь к администратору!");
                }
            });
    }, [flag]);

    const callCreatePriceTable = () => {
        updatePriceTable({ name, note, price: newPrice, priceId })
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
                    alert("Ошибка 146 - Обратитесь к администратору!");
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
                    <tbody>
                        {newPrice.length === 0 ? (
                            <Spinner
                                className="vizits-price-spiner"
                                animation="border"
                            />
                        ) : (
                            <>
                                {flag
                                    ? newPrice.map((price, index) => (
                                          <tr key={index}>
                                              {Object.keys(price).map(
                                                  (item) => (
                                                      <td key={item}>
                                                          {price[item]}
                                                      </td>
                                                  )
                                              )}
                                          </tr>
                                      ))
                                    : newPrice.map((price, index) => (
                                          <tr key={index}>
                                              {Object.keys(price).map(
                                                  (item) => (
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
                                                                  price[item]
                                                              }
                                                          ></input>
                                                      </td>
                                                  )
                                              )}
                                          </tr>
                                      ))}
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

export default CreatePrice;
