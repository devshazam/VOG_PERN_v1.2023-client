import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../index";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import { createRequisites } from "../../../http/deviceAPI";

// получение всех товаров корзины + удаление элементов из корзины + оплата
const CashlessTable = () => {
    const { user } = useContext(Context);

    const [directorFullName, setDirectorFullName] = useState("");
    const [inn, setInn] = useState("");
    const [ogrn, setOgrn] = useState("");
    const [bik, setBik] = useState("");
    const [checkingAccount, setCheckingAccount] = useState("");
    const [bankName, setBankName] = useState("");
    const [bankAddress, setBankAddress] = useState("");
    const [korAccount, setKorAccount] = useState("");
    const [orgFullName, setOrgFullName] = useState("");
    const [legalAddress, setLegalAddress] = useState("");
    const [spinner, setSpinner] = useState(true);

    function callFromCashlessInputs() {
        if (!user.user.id) {
            window.location.reload();
        }
        setSpinner(false);
        createRequisites({
            directorFullName,
            inn,
            ogrn,
            bik,
            checkingAccount,
            bankName,
            bankAddress,
            korAccount,
            orgFullName,
            legalAddress,
            userId: user.user.id,
        })
            .then((data) => {})
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 136 - Обратитесь к администратору!");
                }
            })
            .finally(() => {
                setSpinner(true);
            });
    }

    // #########################################################################################
    return (
        <>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingDirectorFullName"
                        label="Полное имя директора:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="Имя:"
                            onChange={(e) =>
                                setDirectorFullName(e.target.value)
                            }
                            value={directorFullName}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel controlId="floatingInn" label="Ваш ИНН:">
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="номер:"
                            onChange={(e) => setInn(e.target.value)}
                            value={inn}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel controlId="floatingOgrn" label="Ваш ОГРН:">
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="номер:"
                            onChange={(e) => setOgrn(e.target.value)}
                            value={ogrn}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel controlId="floatingBik" label="Ваш БИК:">
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="номер:"
                            onChange={(e) => setBik(e.target.value)}
                            value={bik}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingCheckingAccount"
                        label="Расчетный счет:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="номер:"
                            onChange={(e) => setCheckingAccount(e.target.value)}
                            value={checkingAccount}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingBankName"
                        label="Название банка:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="номер:"
                            onChange={(e) => setBankName(e.target.value)}
                            value={bankName}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingBankAddress"
                        label="Адрес банка:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="адрес:"
                            onChange={(e) => setBankAddress(e.target.value)}
                            value={bankAddress}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingKorAccount"
                        label="Корреспондентский счет:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="номер:"
                            onChange={(e) => setKorAccount(e.target.value)}
                            value={korAccount}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingOrgFullName"
                        label="Полное название организации:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="название:"
                            onChange={(e) => setOrgFullName(e.target.value)}
                            value={orgFullName}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mb-3">
                    <FloatingLabel
                        controlId="floatingLegalAddress"
                        label="Юридический адрес:"
                    >
                        {" "}
                        {/* вставить сюда уникальный controlID */}
                        <Form.Control
                            type="text"
                            placeholder="адрес:"
                            onChange={(e) => setLegalAddress(e.target.value)}
                            value={legalAddress}
                        />
                    </FloatingLabel>
                </Form.Group>

                {spinner ? (
                    <Button
                        variant="danger"
                        onClick={callFromCashlessInputs}
                        className="w-100 mb-3"
                    >
                        В корзину{" "}
                    </Button>
                ) : (
                    <Button
                        variant="danger"
                        onClick={callFromCashlessInputs}
                        className="w-100 mb-3"
                    >
                        <Spinner animation="border"></Spinner>
                    </Button>
                )}
            </Row>
        </>
    );
};

export default CashlessTable;
