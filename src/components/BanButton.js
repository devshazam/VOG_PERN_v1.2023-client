import React, { useState } from "react";

import { updateJson } from "../http/jsonAPI";
import NavDropdown from "react-bootstrap/NavDropdown";

const BanForSite = () => {

    const blockSite = async () => {
        updateJson()
            .then((data) => {
                alert("Выполнено успешно!");
            })
            .catch((error) => {
                console.log("dev", error);
                alert("Ошибка 503 - Обратитесь к администратору!");
            });
    };

    return (
        <>
            <NavDropdown.Item onClick={blockSite} className="fioLink">
                Блокировать сайт
            </NavDropdown.Item>
        </>
    );
};

export default BanForSite;
