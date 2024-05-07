import React, { useState, useEffect, useContext } from "react";


import { createObjectItem } from "../../http/jsonAPI";

// Таблица заказанных товаров
const PrivateOffice = () => {
    const [rank, setRank] = useState("");
    const [image, setImage] = useState(null);

    // Загрузка всех заказов пользователя
    function sendObject(e){
        e.preventDefault()
        if (
            !image ||
            !rank ) {
            alert("Не все поля заполнены!");
            return;
        }
        if (+image.size > 102400) {
            alert("Вставьте файл не более 100Kb");
            return;
        }
        const formData = new FormData();
        formData.append("rank", rank);
        formData.append("image", image);

        createObjectItem(formData)
            .then((data) => {
                alert("Данные успешно внесены!");
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 101 - Обратитесь к администратору!");
                }
            })
    }
    return (
        <>
        <form onSubmit={(e) => sendObject(e)}>
            <input type="file" onChange={(e) => setImage(e.target.files[0])}  accept="image/jpeg"/>
            <select name="select" id="select" onChange={(e) => setRank(e.target.value)}>
                <option value="cvet">цветы</option>
                <option value="jivot">Животные</option>
                <option value="1">Фон Визитки</option>
                <option value="2">Фон кружки</option>
            </select>
            <input type="submit" value={"Загрузить"}/>
        </form>
        </>
    );
};

export default PrivateOffice;
