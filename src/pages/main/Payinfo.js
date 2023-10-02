import React from "react";
import { useEffect, useState } from "react";

import { checkPayStatus } from "../../http/deviceAPI";

const Contacts = () => {
    const [value, setValue] = useState("");
    useEffect(() => {
        checkPayStatus()
            .then((data) => {
                console.log(data.status);
                if (data.status == "success") {
                    setValue("Оплата прошла успешно!");
                } else {
                    setValue("Оплата НЕ прошла!");
                }
                setTimeout(function () {
                    window.location.href = "/";
                }, 10000);
            })
            .catch((error) => {
                console.log("dev", error);
                alert("Ошибка 505 - Обратитесь к администратору!");
            });
    }, []);

    return (
        <>
            <div className="col-sm-9" id="contentIdPay">
                <h1>{value}</h1>
                <p>
                    В течении 10 секунд вы будете перенаправлены на главную
                    страницу!
                </p>
            </div>
        </>
    );
};

export default Contacts;
