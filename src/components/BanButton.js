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
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 102 - Обратитесь к администратору!");
                }
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
