import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { observer } from "mobx-react-lite";
import { fetchJson } from "../../http/jsonAPI";
import isEmail from "validator/lib/isEmail";
import Image from "react-bootstrap/Image";

const BanForSite = () => {
    const [banFlag, setBanFlag] = useState(false);

    useEffect(() => {
        fetchJson()
            .then((data) => {
                setBanFlag(JSON.parse(data.value).val);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 109 - Обратитесь к администратору!");
                }
            });
    }, []);

    return (
        <>
            {banFlag && (
                <div className="ban-modal">
                    <h3>Сайт на обслуживании! +7 (909) 380-25-19</h3>
                    <Image
                        src="/file/b14fa0bc9d533524a1bfadb3c588a843.gif"
                        className="bascket_img"
                        rounded
                        alt="Заказы"
                        title="Заказы"
                    />
                </div>
            )}
        </>
    );
};

export default BanForSite;
