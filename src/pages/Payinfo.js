import React from "react";
import { useEffect, useState } from "react";

import { callPay } from "../http/deviceAPI";

const Contacts = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        callPay()
            .then((data) => {
                if (data.status == "success") {
                    setValue("Оплата прошла успешно!");
                } else {
                    setValue("Оплата НЕ прошла!");
                }
            })
            .catch((error) => {
                console.log('dev', error);
                alert('Ошибка 505 - Обратитесь к администратору!');
            });
    }, []);

    return (
        <>
            <div className="col-sm-9" id="content">
                <h1>{value}</h1>
            </div>
        </>
    );
};

export default Contacts;
