import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../index";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { deleteItemFromBasket } from "../../../http/deviceAPI";

// получение всех товаров корзины + удаление элементов из корзины + оплата
const CashlessTable = (props) => {
    const { helpers, user } = useContext(Context);

    function callDeleteItemFromBasket(deviceId) {
        deleteItemFromBasket({ deviceId, userId: user.user.id })
            .then((data) => {
                helpers.setReloadBasket(+helpers.reloadBasket + 1);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 137 - Обратитесь к администратору!");
                }
            });
    }

    // #########################################################################################
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Дата создания</th>
                        <th>Цена</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.devices).length ? (
                        <>
                            {props.devices.map((device) => (
                                <tr key={device.id}>
                                    <td>{device.name}</td>
                                    <td>{device.feature}</td>
                                    <td>
                                        {device.createdAt.split("T")[0] +
                                            " / " +
                                            device.createdAt
                                                .split("T")[1]
                                                .split(".")[0]}
                                    </td>
                                    <td>{device.price} руб.</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                callDeleteItemFromBasket(
                                                    device.id
                                                )
                                            }
                                        >
                                            Убрать
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </>
                    ) : (
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
};

export default CashlessTable;
