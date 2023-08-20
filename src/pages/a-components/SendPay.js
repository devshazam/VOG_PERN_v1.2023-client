import React, { useContext, useState } from "react";
import { Context } from "../../index";

import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { createItem } from "../../http/deviceAPI.js";
import { observer } from "mobx-react-lite";

/*
 PROPS: value:number:string; description:string; name:string; id:number; 

*/

const SendPay = observer((props) => {
    const { user, helpers } = useContext(Context);
    const [spinner, setSpinner] = useState(true); // Запускает спиннер клика по купить
    const [file, setFile] = useState(null); // Файл
    const [descriptionText, setDescriptionText] = useState(""); // Файл
    
    const countPrice = () => {
        if (!user.isAuth) {
            alert(
                "Пожалуйста Авторизуйтесь или Зарегистрируйтесь! Кнопки входа и регистрации в самом верху с правой стороны!"  ); return; }
        if (descriptionText.split("").length > 1000) {
            alert("Длинна описания должна быть меннее 1000 символов!"); return; }
        if (!file) {
            alert("Не загружен файл!");  return; }
        if (!Number.isInteger(+props.value)) {alert("Цена не сформирована!");return;}
        if (+file.size > 1e7) {
            alert("Вставьте файл не более 10 Mb"); return; }


        const formData = new FormData();
        formData.append("value", `${props.value}`);
        formData.append("name", `${props.name}`);
        formData.append("description", `${props.description}`);
        formData.append("descriptionText", `${descriptionText}`);
        formData.append("img", file);
        formData.append("userId", `${user.user.id}`);
        formData.append("goodId", `${props.id}`);

        setSpinner(false);
        createItem(formData)
            .then((data) => {
                setSpinner(true);
                helpers.setReloadBasket(+helpers.reloadBasket + 1)
            })
            .catch((error) => {
                console.log("dev", error);
                alert("Ошибка 506 - Обратитесь к администратору!");
            });
    };

    //  RETURN BLOCK
    return (
        <>
            <Row className="mb-3">
                <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                >
                    <FloatingLabel
                        controlId="floatingFileOne"
                        label="Размер файла до 10 Mb"
                    >
                        <Form.Control
                            type="file"
                            placeholder="Размер файла до 10 Mb"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                >
                    <FloatingLabel
                        controlId="floatingDescriptionItem"
                        label="Описание (cсылки на файлы, дополнительные условия):"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Ссылки на файлы, дополнительные условия"
                            onChange={(e) => setDescriptionText(e.target.value)}
                            value={descriptionText}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <Button variant="danger" onClick={countPrice} className="w-100">
                {spinner ? "В корзину" : <Spinner animation="border"></Spinner>}
            </Button>
        </>
    );
});

export default SendPay;
