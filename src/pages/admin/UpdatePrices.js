import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from "react-bootstrap/Container";

import { updatePriceByExel } from "../../http/jsonAPI";
import { updateGoodsByExel } from "../../http/goodsAPI";
import ProcentInput from './component/ProcentInput'

//
const UpdatePrices = () => {
    const { user } = useContext(Context);
    const [image, setImage] = useState(null);
    const [xlsx, setXlsx] = useState(null);

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
                if(error.response.status == 432){
                    alert(error.response.data.message);
                }else{
                    console.log('dev', error);
                    alert('Ошибка 510 - Обратитесь к администратору!');
                }
            }
    }


    async function updateGoodsItemFunction() {
        if (!user.user.id) {window.location.reload();}
        if (!xlsx) { alert("Не все поля заполнены!"); return; }
        if (+xlsx.size > 102400){alert("Вставьте файл не более 100Kb");return}
        if (xlsx.name.split('.').reverse()[0] != 'xlsx'){alert("Формат файла только xlsx");return}
        
            const formData = new FormData();
                    formData.append("image", xlsx);
            try {
                const data = await updateGoodsByExel(formData);
                console.log("dev", data);
                alert("Данные успешно внесены!");
            } catch (error) {
                if(error.response.status == 432){
                    alert(error.response.data.message);
                }else{
                    console.log('dev', error);
                    alert('Ошибка 510 - Обратитесь к администратору!');
                }
            }
    }


// #########################################################################################
    return (
        <>
            <Container>
                        <h1>Обновление цен товаров и прайсов:</h1>
                     
                        <Row className="mb-3">
                            <Col xs={12} lg={4}>
                                <h4>Обновление прайса визиток</h4>
                                <Form.Group as={Col} md="12" className="mb-3">
                                    <FloatingLabel controlId="floatingPassword" label="Визитки (Строго xlsx):"> {/* вставить сюда уникальный controlID */} 
                                        <Form.Control
                                            type="file"
                                            placeholder="Размер файла до 10 Mb"
                                            onChange={(e) => setImage(e.target.files[0])} 
                                        />
                                    </FloatingLabel>
                                </Form.Group>

                                <Button
                                    variant="danger"
                                    onClick={createGoodsItemFunction}
                                >Создать
                                </Button>
                            </Col>
                            <Col xs={12} lg={4}>
                                <h4>Обновление товаров по XSLX</h4>
                                <Form.Group as={Col} md="12" className="mb-3">
                                    <FloatingLabel controlId="floatingPassword" label="(Строго xlsx):"> {/* вставить сюда уникальный controlID */} 
                                        <Form.Control
                                            type="file"
                                            placeholder="Размер файла до 10 Mb"
                                            onChange={(e) => setXlsx(e.target.files[0])} 
                                        />
                                    </FloatingLabel>
                                </Form.Group>

                                <Button
                                    variant="danger"
                                    onClick={updateGoodsItemFunction}
                                >Создать
                                </Button>
                            </Col>
                            <Col xs={12} lg={4}>
                            <h4>Обновление цен всех товаров на % по категориям</h4>
                                <ProcentInput />
                            </Col>
                             
                        </Row>
            </Container>
        </>
    );
};

export default UpdatePrices;
