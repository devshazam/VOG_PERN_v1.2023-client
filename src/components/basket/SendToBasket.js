import React, { useContext, useState } from "react";
import { Context } from "../../index";

import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { createDevice } from "../../http/deviceAPI.js";
import { observer } from "mobx-react-lite";

/*
 PROPS: value:number:string; description:string; name:string; id:number; 

*/

const SendToBasket = observer((props) => {
    const { user, helpers } = useContext(Context);
    const [spinner, setSpinner] = useState(true); // Запускает спиннер клика по купить
    const [file, setFile] = useState(null); // Файл
    const [descriptionText, setDescriptionText] = useState(""); // Файл
    const [cargo, setCargo] = useState("0");
    const [address, setAddress] = useState("");
    const deliveryType = [
        "Петропавловская 87",
        "Казахская 25",
        "СДЕК (до пункта выдачи)",
        "СДЕК (до вашего адреса)",
        "Почта (до пункта выдачи)",
        "Почта (до вашего адреса)",
    ];
    console.log(props.value, props.description);
    const countPrice = () => {
        if (!user.isAuth) {
            alert(
                "Пожалуйста Авторизуйтесь или Зарегистрируйтесь! Кнопки входа и регистрации в самом верху с правой стороны!"
            );
            return;
        }
        if (descriptionText.split("").length > 1000) {
            alert("Длинна описания должна быть меннее 1000 символов!");
            return;
        }
        if (props.value == "0" || isNaN(props.value)) {
            alert("Не сформирована цена!");
            return;
        }
        if (!file) {
            alert("Не загружен файл!");
            return;
        }
        if (+file.size > 1e7) {
            alert("Вставьте файл не более 10 Mb");
            return;
        }

        const formData = new FormData();
        formData.append("value", `${props.value}`);
        formData.append("name", `${props.name}`);
        formData.append(
            "description",
            `${props.description}. Доставка: ${
                deliveryType[+cargo]
            }, ${address}`
        );
        formData.append("descriptionText", `${descriptionText}`);
        formData.append("img", file);
        formData.append("userId", `${user.user.id}`);
        // formData.append("goodId", `${props.id}`);

        setSpinner(false);
        createDevice(formData)
            .then((data) => {
                helpers.setReloadBasket(+helpers.reloadBasket + 1);
                alert("Заказ добавлен в корзину!");
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 107 - Обратитесь к администратору!");
                }
            })
            .finally(() => {
                setSpinner(true);
            });
    };

    //  RETURN BLOCK
    return (
        <>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-3">
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
                    // className="mb-3"
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
            <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-3">
                    <FloatingLabel
                        controlId="floatingSelect"
                        label="Доставка*:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setCargo(e.target.value)}
                            value={cargo}
                        >
                            <option value="0">
                                Самовывоз: Петропавловская 87
                            </option>
                            <option value="1">Самовывоз: Казахская 25</option>
                            <option value="2">
                                Доставка: СДЕК (до пункта выдачи)
                            </option>
                            <option value="3">
                                Доставка: СДЕК (до вашего адреса)
                            </option>
                            <option value="4">
                                Доставка: Почта (до пункта выдачи)
                            </option>
                            <option value="5">
                                Доставка: Почта (до вашего адреса)
                            </option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                {+cargo > 1 && (
                    <Form.Group as={Col} md="12" className="mb-3">
                        <FloatingLabel
                            controlId="floatingAddress"
                            label="Ваш адрес:"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Рай-он, улица, дом, квартира"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                        </FloatingLabel>
                    </Form.Group>
                )}
            </Row>

            {spinner ? (
                <Button
                    variant="danger"
                    onClick={countPrice}
                    className="w-100 mb-3"
                >
                    В корзину
                </Button>
            ) : (
                <Button variant="danger" className="w-100 mb-3">
                    <Spinner animation="border"></Spinner>
                </Button>
            )}

            <p style={{ fontSize: 12 }}>
                * - доставка в течении 3 дней после оплаты
            </p>
        </>
    );
});

export default SendToBasket;
