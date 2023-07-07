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






const Samokleyka_belaya = observer(() => {



    const {user, device} = useContext(Context)
    

    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(0); // ширина баннеар
    const [height, setHeight] = useState(0); // высота баннера
    const [description, setDescription] = useState(''); // Телефон
    const [cargo, setCargo] = useState('Самовывоз: Петропавловская 87'); // Телефон

    
    const [side, setSide] = useState(0);
    const [vidSamo, setVidSamo] = useState('Белая');

     const [tel, setTel] = useState(0);
        const [file, setFile] = useState(null);
    const name = 'Cамоклейка';


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
      console.log(functionWithSwitch())

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
            
        
            <div id="right">

<div className="wrapper">
    <div className="col-6">
    <Image src={functionWithSwitch()}  rounded />
        

        </div>
    <div className="col-6">


        <h1>Цена: {value} p.</h1>
<hr></hr>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Ширина (мм):</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Миллиметры"
                                onChange={e => setWidth(e.target.value)}
                            />
                            <Form.Control.Feedback  type="invalid">Введите ширину!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
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
 

    
    
    </div>
    </div>


    <h2>Самоклейки - подложка белая (ГЛЯНЕЦ/МАТ)</h2>
						<p>Самоклеящаяся пленка – это материал, который имеет специальное покрытие на одной стороне, позволяющее ему приклеиваться к различным поверхностям без использования дополнительных клеевых веществ. Ниже приведен текст, описывающий самоклеящуюся пленку:

Самоклеящаяся пленка – это универсальный материал, который может быть использован в различных областях. Она состоит из основы, которая обычно выполнена из винила, и специального клеящего слоя, нанесенного на одну сторону пленки.

Одним из главных преимуществ самоклеящейся пленки является ее легкость в использовании. Она может быть легко приклеена к различным поверхностям, включая стекло, металл, пластик, дерево и т.д. Клейкий слой обеспечивает надежное и долговременное сцепление с поверхностью, сохраняя при этом гибкость и устойчивость к воздействию окружающей среды.</p>
                        
</div>
          

        </>
    );
});

export default Samokleyka_belaya;