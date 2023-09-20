import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { updatePriceByExel } from "../../http/jsonAPI";

//
const UpdatePrices = () => {
    const { user } = useContext(Context);
    const [image, setImage] = useState(null);
// console.log(image, typeof image.name.split('.').reverse()[0] )
    async function createGoodsItemFunction() {
        if (!user.user.id) {window.location.reload();}
        if (!image) { alert("Не все поля заполнены!"); return; }
        if (+image.size > 102400){alert("Вставьте файл не более 100Kb");return}
        if (image.name.split('.').reverse()[0] != 'xlsx'){alert("Формат файла только xlsx");return}
        
            const formData = new FormData();
                    formData.append("image", image);
            try {
                const data = await updatePriceByExel(formData);
                console.log("dev", data);
                alert("Данные успешно внесены!");
            } catch (error) {
                console.log('dev', error);
                 alert('Ошибка 510 - Обратитесь к администратору!');
            }
    }
// #########################################################################################
    return (
        <>
            <Container>
                        <h1>Создание товара:</h1>
                     
                        <Row className="mb-3">

                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>
                                    Файл (Строго xlsx):
                                </Form.Label>
                                <Form.Control type="file" required onChange={(e) => setImage(e.target.files[0])} />
                            </Form.Group>

                            <Button
                                variant="danger"
                                onClick={createGoodsItemFunction}
                            >Создать
                            </Button>

                        </Row>
            </Container>
        </>
    );
};

export default UpdatePrices;
