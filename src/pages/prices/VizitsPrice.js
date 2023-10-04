import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { fetchOnePrice, updatePriceTableB } from "../../http/goodsAPI";

const VizitsPrice = () => {
    const { user } = useContext(Context);

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
        fetchOnePrice({ priceId: 14 })
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
                    alert("Ошибка 149 - Обратитесь к администратору!");
                }
            });
    }, [flag]);

    const callCreatePriceTable = () => {
        updatePriceTableB({ name, note, price: newPrice })
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
                    alert("Ошибка 150 - Обратитесь к администратору!");
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
                            <th>Сторонность:</th>
                            <th>Вид:</th>
                            <th>Ламинация:</th>
                            <th>96 шт</th>
                            <th>204 шт</th>
                            <th>500 шт</th>
                            <th>1000 шт</th>
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
                                {flag
                                    ? newPrice.map((price, index) => (
                                          <tr key={index}>
                                              {index === 0 && (
                                                  <>
                                                      <td rowSpan="9">
                                                          Односторонние
                                                      </td>
                                                      <td rowSpan="3">
                                                          Матовые
                                                      </td>
                                                  </>
                                              )}
                                              {index === 3 && (
                                                  <td rowSpan="3">Глянцевые</td>
                                              )}
                                              {index === 6 && (
                                                  <td rowSpan="3">
                                                      Дизайнерские
                                                  </td>
                                              )}
                                              {index === 9 && (
                                                  <>
                                                      <td rowSpan="9">
                                                          Двусторонние
                                                      </td>
                                                      <td rowSpan="3">
                                                          Матовые
                                                      </td>
                                                  </>
                                              )}
                                              {index === 12 && (
                                                  <td rowSpan="3">Глянцевые</td>
                                              )}
                                              {index === 15 && (
                                                  <td rowSpan="3">
                                                      Дизайнерские
                                                  </td>
                                              )}
                                              {(index === 0 ||
                                                  index === 3 ||
                                                  index === 6 ||
                                                  index === 9 ||
                                                  index === 12 ||
                                                  index === 15) && (
                                                  <td>Без ламинации</td>
                                              )}
                                              {(index === 1 ||
                                                  index === 4 ||
                                                  index === 7 ||
                                                  index === 10 ||
                                                  index === 13 ||
                                                  index === 16) && (
                                                  <td>Глянцевая</td>
                                              )}
                                              {(index === 2 ||
                                                  index === 5 ||
                                                  index === 8 ||
                                                  index === 11 ||
                                                  index === 14 ||
                                                  index === 17) && (
                                                  <td>Матовая</td>
                                              )}

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
                                              {index === 0 && (
                                                  <>
                                                      <td rowSpan="9">
                                                          Односторонние
                                                      </td>
                                                      <td rowSpan="3">
                                                          Матовые
                                                      </td>
                                                  </>
                                              )}
                                              {index === 3 && (
                                                  <td rowSpan="3">Глянцевые</td>
                                              )}
                                              {index === 6 && (
                                                  <td rowSpan="3">
                                                      Дизайнерские
                                                  </td>
                                              )}
                                              {index === 9 && (
                                                  <>
                                                      <td rowSpan="9">
                                                          Двусторонние
                                                      </td>
                                                      <td rowSpan="3">
                                                          Матовые
                                                      </td>
                                                  </>
                                              )}
                                              {index === 12 && (
                                                  <td rowSpan="3">Глянцевые</td>
                                              )}
                                              {index === 15 && (
                                                  <td rowSpan="3">
                                                      Дизайнерские
                                                  </td>
                                              )}
                                              {(index === 0 ||
                                                  index === 3 ||
                                                  index === 6 ||
                                                  index === 9 ||
                                                  index === 12 ||
                                                  index === 15) && (
                                                  <td>Без ламинации</td>
                                              )}
                                              {(index === 1 ||
                                                  index === 4 ||
                                                  index === 7 ||
                                                  index === 10 ||
                                                  index === 13 ||
                                                  index === 16) && (
                                                  <td>Глянцевая</td>
                                              )}
                                              {(index === 2 ||
                                                  index === 5 ||
                                                  index === 8 ||
                                                  index === 11 ||
                                                  index === 14 ||
                                                  index === 17) && (
                                                  <td>Матовая</td>
                                              )}

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

export default VizitsPrice;
