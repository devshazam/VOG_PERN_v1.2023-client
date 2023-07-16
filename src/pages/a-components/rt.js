import React, { useContext, useState } from "react";
import { Context } from "../../index";

import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { createItem } from "../../http/deviceAPI.js";
import { observer } from "mobx-react-lite";

const SendPay = observer((props) => {
    // CONTEXT
    const { user, device } = useContext(Context);
    // STATES
    const [spinner, setSpinner] = useState(true); // Запускает спиннер клика по купить
    const [cargo, setCargo] = useState("Самовывоз: Петропавловская 87"); // Телефон
    const [file, setFile] = useState(null); // Файл

    const countPrice = () => {
        if (user.isAuth) {
            console.log(Number(props.value));
            if (file && Number(props.value)) {
                const formData = new FormData();
                formData.append("value", `${props.value}`);
                formData.append("name", `${props.name}`);
                formData.append(
                    "description",
                    `${props.description}  Доставка: ${cargo}`
                );
                formData.append("img", file);
                formData.append("userId", `${user.user.id}`);
console.log(String(file.type))
                if (Number(file.size) < 900000 && String(file.type) == 'image/jpeg') {
                    setSpinner(false);
                    alert(0)
                    createItem(formData).then((data) => {
                        console.log("00-конечная точка", data);
                        // window.location.href = data.confirmation.confirmation_url;
                    }).catch((e) => {
                        console.log(e.response.data.message)
                        alert('Ошибка сервера! Пожалуйста обрптитесь к администрации сайта!')
                      });
                    
                } else {
                    console.log("00-", props.description, cargo);
                    alert("Картинка должна быть менее 900Kb в формате 'JPG'");
                }
            } else {
                alert("Не загружен файл или не сформированна цена!");
            }
        } else {
            alert(
                "Пожалуйста Авторизуйтесь или Зарегистрируйтесь! Кнопки входа и регистрации в самом верху с левой стороны!"
            );
        }
    };

    //  RETURN BLOCK
    return (
        <>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Телефон:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ваш номер / после регистрации"
                        required
                        defaultValue={user.user.phone && user.user.phone}
                        disabled
                    />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>
                        Файл (Формат: jpg; Размер до: 900kB):
                    </Form.Label>
                    <Form.Control
                        type="file"
                        required
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <Form.Control.Feedback type="invalid">
                        Пожалуйста загрузите файл!
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <hr></hr>
            <Row className="mb-3">
                <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                >
                    <Form.Label>Доставка:</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setCargo(e.target.value)}
                            value={cargo}
                        >
                            <option value="Самовывоз: Петропавловская 87">
                                Самовывоз: Петропавловская 87
                            </option>
                            <option value="Самовывоз: Казахская 25">
                                Самовывоз: Казахская 25
                            </option>
                        </Form.Select>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Button type="submit" variant="danger" onClick={countPrice}>
                {spinner ? "КУПИТЬ" : <Spinner animation="border"></Spinner>}
            </Button>
        </>
    );
});

export default SendPay;
