import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { createItem } from '../../http/deviceAPI'
import SendPay from '../a-components/SendPay'
import GetFile from '../a-components/GetFile'
import {observer} from "mobx-react-lite";

import Container from 'react-bootstrap/Container';




const Samokleyka = observer(() => {



    const {user, device} = useContext(Context)
    

    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(0); // ширина баннеар
    const [height, setHeight] = useState(0); // высота баннера
    const [description, setDescription] = useState(''); // Телефон
    const [cargo, setCargo] = useState('Самовывоз: Петропавловская 87'); // Телефон

    const [vidSamo, setVidSamo] = useState('Белая');

     const [tel, setTel] = useState(0);
        const [file, setFile] = useState(null);
    const name = 'Cамоклейка';

    console.log(value)

    useEffect(() => {
        let m1 = Number(width)*Number(height) / 1000000
        let m2
        if(vidSamo == "Белая"){
                    if(m1 < 1){
                        m2 = m1*650;
                }else if(m1 >= 1 && m1 < 5){
                    m2 = m1*600;
                }if(m1 >= 5 && m1 < 10){
                    m2 = m1*550;
                }if(m1 >= 10){
                    m2 = m1*500;
                }
        }else if(vidSamo == "Черная"){
                if(m1 < 1){
                    m2 = m1*700;
                }else if(m1 >= 1 && m1 < 5){
                    m2 = m1*650;
                }if(m1 >= 5 && m1 < 10){
                    m2 = m1*600;
                }if(m1 >= 10){
                    m2 = m1*550;
                }
        }else if(vidSamo == "Цветная"){
                if(m1 < 1){
                    m2 = m1*900;
                }else if(m1 >= 1 && m1 < 5){
                    m2 = m1*850;
                }if(m1 >= 5 && m1 < 10){
                    m2 = m1*800;
                }if(m1 >= 10){
                    m2 = m1*750;
                }
        }else if(vidSamo == "Дизайнерская"){
                if(m1 < 1){
                    m2 = m1*2500;
                }else if(m1 >= 1 && m1 < 5){
                    m2 = m1*2300;
                }if(m1 >= 5 && m1 < 10){
                    m2 = m1*2150;
                }if(m1 >= 10){
                    m2 = m1*2000;
                }
        }else if(vidSamo == "Фотолюминесцентная"){
                if(m1 < 1){
                    m2 = m1*5000;
                }else if(m1 >= 1 && m1 < 5){
                    m2 = m1*4700;
                }if(m1 >= 5 && m1 < 10){
                    m2 = m1*4500;
                }if(m1 >= 10){
                    m2 = m1*4200;
                }
        }else if(vidSamo == "Перфорированная"){
                if(m1 < 1){
                    m2 = m1*1000;
                }else if(m1 >= 1 && m1 < 5){
                    m2 = m1*900;
                }if(m1 >= 5 && m1 < 10){
                    m2 = m1*850;
                }if(m1 >= 10){
                    m2 = m1*800;
                }
        }else if(vidSamo == "Прозрачная"){
                if(m1 < 1){
                    m2 = m1*700;
                }else if(m1 >= 1 && m1 < 5){
                    m2 = m1*650;
                }if(m1 >= 5 && m1 < 10){
                    m2 = m1*600;
                }if(m1 >= 10){
                    m2 = m1*550;
                }
        }else if(vidSamo == "Светоотражающая"){
            if(m1 < 1){
                m2 = m1*1500;
            }else if(m1 >= 1 && m1 < 5){
                m2 = m1*1400;
            }if(m1 >= 5 && m1 < 10){
                m2 = m1*1300;
            }if(m1 >= 10){
                m2 = m1*1200;
            }
        }
        
        if(Math.round((m2) * 100) / 100 <= 200){
            setValue(200);
        }else{
            setValue(Math.round((m2) * 100) / 100);
        }
        

      }, [width, height, vidSamo]); // <- add the count variable here
  
// console.log(value)


    const functionWithSwitch = () => {
        switch(vidSamo){
        case "Белая" :
            return "/file/samokleyki/belaya.jpg"
        case "Черная": 
            return "/file/samokleyki/chernaya.jpg"
        case "Цветная": 
            return "/file/samokleyki/cvetnaya.jpg"
        case "Дизайнерская": 
            return "/file/samokleyki/dezainerskaya.jpg"
        case "Фотолюминесцентная": 
            return "/file/samokleyki/fotoluminiscent.jpg"
        case "Перфорированная": 
            return "/file/samokleyki/perforirovanaya.jpg"
        case "Прозрачная": 
            return "/file/samokleyki/prozrachnaya.jpg"
        case "Светоотражающая": 
            return "/file/samokleyki/svetootrajaushaya.jpg"
          default:
            return "/file/samokleyki/belaya.jpg"
        }
      }
    //   console.log(functionWithSwitch())

      const [validated, setValidated] = useState(false);

      const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return (
        <>
            
        


    <Container>
            <Row>
              <Col xs={12} md={6}>
                <Image src={functionWithSwitch()}  id="goods-image" rounded />
              </Col>
              <Col xs={12} lg ={6}>


        <h1>Цена: {value} p.</h1>
<hr></hr>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Ширина (мм):</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Миллиметры"
                                onChange={e => setWidth(e.target.value)}
                            />
                            <Form.Control.Feedback  type="invalid">Введите ширину!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Высота (мм):</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Миллиметры"
                                onChange={e => setHeight(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Введите высоту!</Form.Control.Feedback>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Плотность (гр):</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Select aria-label="Default select example" onChange={e => setDensity(e.target.value)}>
                                    <option value="400-440" >400-440</option>
                                    <option value="500" >500</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                Введите плотность.
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group> */}
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Вид самоклейки</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Select aria-label="Default select example" onChange={e => setVidSamo(e.target.value)} value={vidSamo}>
                                    <option value="Белая" >Белая</option>
                                    <option value="Черная" >Черная</option>
                                    <option value="Цветная" >Цветная</option>
                                    <option value="Дизайнерская" >Дизайнерская</option>
                                    <option value="Фотолюминесцентная" >Фотолюминесцентная</option>
                                    <option value="Перфорированная" >Перфорированная</option>
                                    <option value="Прозрачная" >Прозрачная</option>
                                    <option value="Светоотражающая" >Светоотражающая</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                Введите плотность.
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Row>

                        <hr></hr>

                        <GetFile/>
                        
                        
                        <hr></hr>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label>Доставка:</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Select aria-label="Default select example" onChange={e => setCargo(e.target.value)} value={cargo}>
                                    <option value="Самовывоз: Петропавловская 87" >Самовывоз: Петропавловская 87</option>
                                    <option value="Самовывоз: Казахская 25" >Самовывоз: Казахская 25</option>
                                    {/* <option value="500" >СДЕК (оплата при получении)</option> */}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                Выберите вариант доставки.
                                </Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                            
                        </Row>

                        

                        <Form.Group className="mb-3">
                            <Form.Check
                            required
                            label="Соглашаюсь с политикой конфиденциальности."
                            feedback="Вы должны поставить галочку."
                            feedbackType="invalid"
                            />
                        </Form.Group>

                        <SendPay value={value} description={description} name={name} />
                        
                        </Form>
 

    
    
                        </Col>
            </Row>
            <h2>Баннеры</h2>
                <p>Баннеры являются одним из наиболее эффективных и популярных способов рекламы и информационного обозначения. Печать баннеров — это процесс создания крупноформатных материалов с помощью специального оборудования. Ниже приведен текст, описывающий процесс печати баннеров:

                Печать баннеров – это профессиональный процесс, при котором создаются крупноформатные материалы с использованием специализированного оборудования и высококачественных материалов. Он предоставляет возможность эффективно привлекать внимание к продукту, услуге или событию.

                Печать баннеров начинается с подготовки дизайна и макета. Дизайнер создает графическое оформление баннера, учитывая его цель и целевую аудиторию. Он может включать в себя логотипы, изображения, текст и другие визуальные элементы.</p>
          </Container>
          

        </>
    );
});

export default Samokleyka;