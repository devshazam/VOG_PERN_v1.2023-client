import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";
import { useParams } from "react-router-dom";
import { fetchOneGoods, changeGoodsParams } from "../../http/goodsAPI";

import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import FloatingLabel from "react-bootstrap/FloatingLabel";

const UpdateGoods = () => {
    const { user } = useContext(Context);
    const { goodsId } = useParams();

    const [spinner, setSpinner] = useState(true); // Запускает спиннер клика по купить

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [group, setGroup] = useState("");
    const [price, setPrice] = useState("");
    const [artikul, setArtikul] = useState("");
    const [priceImg, setPriceImg] = useState("");
    const [summa, setSumma] = useState("");
    const [barcode, setBarcode] = useState("");

    const [goodsItem, setGoodsItem] = useState({});
    const [flag, setFlag] = useState(1);

    console.log(goodsItem);
    useEffect(() => {
        fetchOneGoods({ goodsId })
            .then((data) => {
                setGoodsItem(data);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 120 - Обратитесь к администратору!");
                }
            });
    }, [flag]);

    useEffect(() => {
        if (Object.keys(goodsItem).length == 0) {
            setDescription("");
            setBarcode("");
            setGroup("");
            setName("");
            setArtikul("");
            setPrice("");
            setPriceImg("");
            setSumma("");
        } else {
            setDescription(goodsItem.description);
            setBarcode(goodsItem.barcode);
            setGroup(goodsItem.group);
            setName(goodsItem.name);
            setArtikul(goodsItem.artikul);
            setPrice(goodsItem.price);
            setPriceImg(goodsItem.price_img);
            setSumma(goodsItem.summa);
        }
    }, [goodsItem]);

    async function updateGoodsItemFunction() {
        if (!user.user.id) {
            window.location.reload();
        }
        if (
            !name ||
            !description ||
            !group ||
            !price ||
            !artikul ||
            !priceImg
        ) {
            alert("Не все поля заполнены!");
            return;
        }
        if (
            summa.length > 250 ||
            artikul.length > 250 ||
            priceImg.length > 250 ||
            name.length > 250 ||
            description.length > 1000 ||
            price.length > 250
        ) {
            alert("Превышенно кол-во символов для данного поля!");
            return;
        }
        if (
            !Number.isInteger(+price) ||
            !Number.isInteger(+priceImg) ||
            !Number.isInteger(+summa)
        ) {
            alert("Цены и кол-во могут быть только целым числом!");
            return;
        }
        if (!+price) {
            alert("Не допустимое значение цены!");
            return;
        }
        // if (+image.size > 102400){alert("Вставьте файл не более 100Kb");return}
        // if (image.name.split('.').reverse()[0] !== 'jpg'){alert("Формат файла только jpg");return}

        setSpinner(false);

        changeGoodsParams({
            name,
            description,
            group,
            price,
            artikul,
            priceImg,
            goodsId,
            barcode,
            summa,
        })
            .then((data) => {
                alert("Данные успешно изменены!");
                setFlag(flag + 1);
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 121 - Обратитесь к администратору!");
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
                <Row>
                    <Col xs={12} md={6}>
                        <Image src={goodsItem.image} id="goods-image" rounded />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>Введите новые значения:</h2>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingName"
                                    label="Название товара (до 200 символов):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Название товара"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        value={name}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingArtikul"
                                    label="Артикул:"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Артикул"
                                        onChange={(e) =>
                                            setArtikul(e.target.value)
                                        }
                                        value={artikul}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingPrice"
                                    label="Цена товара (руб.):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Цена товара (руб.):"
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                        value={price}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingPriceImg"
                                    label="Цена товара с оформлением (руб.):"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Цена товара (руб.):"
                                        onChange={(e) =>
                                            setPriceImg(e.target.value)
                                        }
                                        value={priceImg}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSumma"
                                    label="Кол-во:"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="кол-во"
                                        onChange={(e) =>
                                            setSumma(e.target.value)
                                        }
                                        value={summa}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSumma"
                                    label="Описание:"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Описание товара"
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        value={description}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSumma"
                                    label="Штрихкод:"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Описание товара"
                                        onChange={(e) =>
                                            setBarcode(e.target.value)
                                        }
                                        value={barcode}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb-3">
                                <FloatingLabel
                                    controlId="floatingSumma"
                                    label="Штрихкод:"
                                >
                                    <Form.Select
                                        aria-label="Floating label select example"
                                        onChange={(e) =>
                                            setGroup(e.target.value)
                                        }
                                        value={group}
                                    >
                                        <option value="krujki">Кружки</option>
                                        <option value="futbolki">
                                            Футболки
                                        </option>
                                        <option value="bagety">Багеты</option>
                                        <option value="planketki">
                                            Плакетки
                                        </option>
                                        <option value="shtender">
                                            Штендеры
                                        </option>
                                        <option value="magnit">
                                            Магнитики
                                        </option>
                                        <option value="brelok">Брелоки</option>
                                        <option value="plenka-avery">
                                            Пленка AVERY
                                        </option>
                                        <option value="3d-nit">
                                            Нить для 3D печати
                                        </option>
                                        <option value="stands">
                                            Информационные стенды
                                        </option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>

                            {spinner ? (
                                <Button
                                    variant="danger"
                                    onClick={updateGoodsItemFunction}
                                >
                                    Обновить
                                </Button>
                            ) : (
                                <Button variant="danger">
                                    <Spinner animation="border"></Spinner>
                                </Button>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default UpdateGoods;
