import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { increasePriceByProcent } from "../../../http/goodsAPI";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Spinner from "react-bootstrap/Spinner";


//
const UpdatePrices = () => {
    const { user } = useContext(Context);
    const [procent, setProcent] = useState('');
    const [group, setGroup] = useState("krujki");
    const [spiner, setSpiner] = useState(true);

    async function createGoodsItemFunction() {
        if (!user.user.id) {window.location.reload();}
        if (!procent ) { alert("Не все поля заполнены!"); return; }
        if (isNaN(procent) ) { alert("Данное поле только для цифр!"); return; }
        setSpiner(false);
        increasePriceByProcent({procent, group}).then((data) => {
            console.log("dev", data);
            setSpiner(true);
            alert('Цены успешно обновлены')
        }).catch((error) => { 
            setSpiner(true);
            if(error.response.status == 432){
                alert(error.response.data.message);
            }else{
                console.log('dev', error);
                alert('Ошибка 510 - Обратитесь к администратору!');
            }
        });


    }
// #########################################################################################
    return (
        <>
            <Form.Group as={Col} md="12" className="mb-3">
                <FloatingLabel controlId="floatingProcent" label="Введите процент:">
                <Form.Control
                    type="text"
                    placeholder="Ширина (мм):"
                    onChange={(e) => setProcent(e.target.value)}
                    value={procent}
                /> 
                </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-3">
                <FloatingLabel controlId="floatingSelect" label="Категория товаров:">  {/* вставить сюда уникальный controlID */} 
                <Form.Select
                        aria-label="Default select example"
                        onChange={(e) =>
                            setGroup(e.target.value)
                        }
                        value={group}
                    >   
                        <option value="krujki">Кружки</option>
                        <option value="futbolki">Футболки</option>
                        <option value="bagety">Багеты</option>
                        <option value="suveniry">Сувенирная продукция</option>
                        <option value="planketki">Планкетки</option>
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>


            <Button
                variant="danger"
                onClick={createGoodsItemFunction}
            >{ spiner ? 'Создать' : <Spinner animation="border" /> }
            </Button>
                           
        </>
    );
};

export default UpdatePrices;
