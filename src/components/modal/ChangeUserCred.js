import React, { useContext, useState } from "react";
import { Context } from "../../index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { observer } from "mobx-react-lite";
import { changeCredencials } from "../../http/userAPI";
import isEmail from "validator/lib/isEmail";

const ChangeUserCred = observer(() => {
    const { helpers, user } = useContext(Context);
    const [email, setEmail] = useState(user.user.email);
    const [phone, setPhone] = useState(user.user.phone);

    const hideModal = () => {
        helpers.setModalUserCred(false);
    };

    const changeCred = () => {
        if (!email || !phone) {
            alert("Оба поля должны быть заполнены!");
            return;
        }
        if (!user.isAuth) {
            alert("Пожалуйста авторизируйтесь!");
            return;
        }
        if (email.split("").length > 200 || phone.split("").length > 200) {
            alert("Одно из значений более 200 символов!");
            return;
        } // длинну строки
        if (!isEmail(email)) {
            alert("Email не корректен!");
            return;
        }

        changeCredencials(email, phone)
            .then((data) => {
                alert("Данные изменены!");
                // helpers.setModalUserCred(false);
                user.setIsAuth(false);
                user.setUser({});
                localStorage.removeItem("token");
                window.location.reload();
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 110 - Обратитесь к администратору!");
                }
            });
    };
    return (
        <>
            <Modal show={helpers.modalUserCred} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите новые данные:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Введите новый email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Введите новый телефон:</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={changeCred}>
                            Отправить
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
});

export default ChangeUserCred;
