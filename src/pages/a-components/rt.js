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
    const [city, setCity] = useState(''); // Файл
    const [address, setAddress] = useState(''); // Файл


    const countPrice = () => {

        if (user.isAuth) {
            console.log(Number(props.value));
            if (file && Number(props.value)) {

               if(String(cargo).split('-')[0] == '2'){ 
                    if(city === '' || address === ''){
                        alert('Пожалйста заполните адрес!')
                        return
                    }    
                 
                } 
                const formData = new FormData();
                formData.append("value", `${props.value}`);
                formData.append("name", `${props.name}`);
                formData.append(
                    "description",
                    `${props.description}  Доставка: ${cargo} ${city}, ${address}`
                );
                formData.append("img", file);
                formData.append("userId", `${user.user.id}`);
console.log(String(file.type))
                if (Number(file.size) < 900000 && String(file.type) == 'image/jpeg') {
                    setSpinner(false);
                    // alert(0)
                    createItem(formData).then((data) => {
                        console.log("00-конечная точка", data);
                        window.location.href = data.confirmation.confirmation_url;
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
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>
                        Описание :
                    </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </Form.Group>
            </Row>
            <hr></hr>
            <Row className="mb-3">
                <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                >
                    <Form.Label>Доставка:**</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setCargo(e.target.value)}
                            value={cargo}
                        >
                            <option value="1-Самовывоз: Петропавловская 87">
                                Самовывоз: Петропавловская 87
                            </option>
                            <option value="1-Самовывоз: Казахская 25">
                                Самовывоз: Казахская 25
                            </option>
                            <option value="2-Доставка: СДЕК (до пункта выдачи)">
                                Доставка: СДЕК (до пункта выдачи)
                            </option>
                            <option value="2-Доставка: СДЕК (до вашего адреса)">
                                Доставка: СДЕК (до вашего адреса)
                            </option>
                            <option value="2-Доставка: Почта (до пункта выдачи)">
                                Доставка: Почта (до пункта выдачи)
                            </option>
                            <option value="2-Доставка: Почта (до вашего адреса)">
                                Доставка: Почта (до вашего адреса)
                            </option>
                        </Form.Select>
                    </InputGroup>
                </Form.Group>
            {String(cargo).split('-')[0] == '2'    &&
             <>   <Form.Group as={Col} md="6" controlId="formGridCity">
                        <Form.Label>Ваш город:</Form.Label>
                        <Form.Control required type="text" placeholder="Город" onChange={(e) => setCity(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formGridCity">
                        <Form.Label>Ваш адрес:</Form.Label>
                        <Form.Control required type="text" placeholder="Рай-он, улица, дом, квартира" onChange={(e) => setAddress(e.target.value)}/>
                </Form.Group>
            </>
            }
            </Row>

            <Button variant="danger" onClick={countPrice}>
                {spinner ? "КУПИТЬ" : <Spinner animation="border"></Spinner>}
            </Button>
            <p style={{ fontSize: 12 }}>
                            ** - отправка в течении 3-х дней после оплаты заказа
                        </p>
        </>
    );
});

export default SendPay;
