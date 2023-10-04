import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { createGoodsItem } from "../../http/goodsAPI";

//
const CreateGoods = () => {
    const { user } = useContext(Context);

    const [barcode, setBarcode] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [group, setGroup] = useState("futbolki");
    const [price, setPrice] = useState("");
    const [priceImg, setPriceImg] = useState("");
    const [artikul, setArtikul] = useState("");
    const [spinner, setSpinner] = useState(true);

    async function createGoodsItemFunction() {
        if (!user.user.id) {
            window.location.reload();
        }
        if (
            !name ||
            !description ||
            !image ||
            !group ||
            !price ||
            !artikul ||
            !priceImg
        ) {
            alert("Не все поля заполнены!");
            return;
        }
        if (
            barcode.length > 250 ||
            name.length > 250 ||
            description.length > 1000 ||
            price.length > 250 ||
            artikul.length > 250
        ) {
            alert("Превышенно кол-во символов для данного поля!");
            return;
        }
        if (!Number.isInteger(+price) || !Number.isInteger(+priceImg)) {
            alert("Цены могут быть только целым ччислом!");
            return;
        }
        if (+image.size > 102400) {
            alert("Вставьте файл не более 100Kb");
            return;
        }
        if (image.name.split(".").reverse()[0] !== "jpg") {
            alert("Формат файла только jpg");
            return;
        }
        setSpinner(false);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("group", group);
        formData.append("image", image);
        formData.append("price", `${Math.ceil(+price)}`);
        formData.append("priceImg", `${Math.ceil(+priceImg)}`);
        formData.append("userId", `${user.user.id}`);
        formData.append("artikul", artikul);
        formData.append("barcode", barcode);

        createGoodsItem(formData)
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
            .finally(() => {
                setSpinner(true);
            });
    }
    // #########################################################################################
    return (
        <>
            <Container>
                <h1>Создание товара:</h1>

                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>
                            Название товара (до 200 символов):
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Название товара"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label>Описание товара:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Описание товара"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Штрихкод:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Название товара"
                            onChange={(e) => setBarcode(e.target.value)}
                            value={barcode}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Артикул:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Название товара"
                            onChange={(e) => setArtikul(e.target.value)}
                            value={artikul}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>
                            Цена товара (Только руб. - Без копеек.!):
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="600"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>
                            Цена оформления (Только руб. - Без копеек.!):
                        </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="600"
                            onChange={(e) => setPriceImg(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>
                            Файл (Строго: 500 x 500 px; Расширение: jpg:
                        </Form.Label>
                        <Form.Control
                            type="file"
                            required
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustomUsername"
                        className="mb-3"
                    >
                        <Form.Label>Группа товаров:</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setGroup(e.target.value)}
                            value={group}
                        >
                            <option value="krujki">Кружки</option>
                            <option value="futbolki">Футболки</option>
                            <option value="bagety">Багеты</option>
                            <option value="planketki">Плакетки</option>
                            <option value="shtender">Штендеры</option>
                            <option value="magnit">Магнитики</option>
                            <option value="brelok">Брелоки</option>
                            <option value="plenka-avery">Пленка AVERY</option>
                            <option value="3d-nit">Нить для 3D печати</option>
                            <option value="stands">
                                Информационные стенды
                            </option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="danger" onClick={createGoodsItemFunction}>
                        {spinner ? (
                            "Создать"
                        ) : (
                            <Spinner animation="border"></Spinner>
                        )}
                    </Button>
                </Row>
            </Container>
        </>
    );
};

export default CreateGoods;
