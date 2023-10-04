import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";

import { updateGoodsByExel } from "../../../http/goodsAPI";

//
const UpdateGoodsByXlsx = () => {
    const { user } = useContext(Context);
    const [xlsx, setXlsx] = useState(null);

    async function updateGoodsItemFunction() {
        if (!user.user.id) {
            window.location.reload();
        }
        if (!xlsx) {
            alert("Не все поля заполнены!");
            return;
        }
        if (+xlsx.size > 102400) {
            alert("Вставьте файл не более 100Kb");
            return;
        }
        if (xlsx.name.split(".").reverse()[0] != "xlsx") {
            alert("Формат файла только xlsx");
            return;
        }

        const formData = new FormData();
        formData.append("image", xlsx);

        updateGoodsByExel(formData)
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
                    alert("Ошибка 125 - Обратитесь к администратору!");
                }
            });
    }

    // #########################################################################################
    return (
        <>
            <Form.Group as={Col} md="12" className="mb-3">
                <FloatingLabel
                    controlId="floatingPassword"
                    label="(Строго xlsx):"
                >
                    {" "}
                    {/* вставить сюда уникальный controlID */}
                    <Form.Control
                        type="file"
                        placeholder="Размер файла до 10 Mb"
                        onChange={(e) => setXlsx(e.target.files[0])}
                    />
                </FloatingLabel>
            </Form.Group>

            <Button
                className="w-100"
                variant="danger"
                onClick={updateGoodsItemFunction}
            >
                Обновить
            </Button>
        </>
    );
};

export default UpdateGoodsByXlsx;
