import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';



import { createItem } from '../../http/deviceAPI'
import SendPay from '../a-components/SendPay'
import GetFile from '../a-components/GetFile'
import {observer} from "mobx-react-lite";


import { vizit } from '../../arrays/vizitki.js';





const Vizitki = () => {



    const [value, setValue] = useState(288);
    const [side, setSide] = useState('one');
    const [vid, setVid] = useState('one');
    const [lam, setLam] = useState('one');
    const [num, setNum] = useState('one');
    
    const [cargo, setCargo] = useState('Самовывоз: Петропавловская 87'); // Телефон
    
    const [description, setDescription] = useState(''); // Телефон
    const name = 'Визитка';

     const [tel, setTel] = useState(0);
    const [file, setFile] = useState(null);



    useEffect(() => {
        setValue(vizit[side][vid][lam][num]);


      }, [side, num, lam, vid]); // <- add the count variable here
  


            
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
                        <Image src="/file/pic/vizitki.png" id="goods-image" rounded />
                    </Col>
                    <Col xs={12} lg ={6}>


        <h1>Цена: {value} p.</h1>
        <hr></hr>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    
                                <Row className="mb-3">
                                

                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Стороны печати:</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Select aria-label="Default select example" onChange={e => setSide(e.target.value)} value={side}>
                                        <option value="one" >Односторонние</option>
                                        <option value="two" >Двусторонние</option>
                                        </Form.Select>
                                    </InputGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Бумага:</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Select aria-label="Default select example" onChange={e => setVid(e.target.value)} value={vid}>
                                            <option value="one" >Матовая</option>
                                            <option value="two" >Глянцевая</option>
                                        </Form.Select>
                                    </InputGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Ламинация:</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Select aria-label="Default select example" onChange={e => setLam(e.target.value)} value={lam}>
                                            <option value="one" >Без ламинации</option>
                                            <option value="two" >Глянцевая</option>
                                            <option value="tre" >Матовая</option>
                                        </Form.Select>
                                    </InputGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>Кол-во:</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Select aria-label="Default select example" onChange={e => setNum(e.target.value)} value={num}>
                                            <option value="one" >96</option>
                                            <option value="two" >200</option>
                                            <option value="tre" >500</option>
                                            <option value="for" >1000</option>
                                        </Form.Select>
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
                    
            <h2>Визитки</h2>
                                <p>Визитка – это небольшая карточка, обычно размером с визитную карточку, которая содержит информацию о человеке или организации. Она является одним из наиболее популярных и эффективных инструментов маркетинга и коммуникации.

        Визитки играют важную роль в бизнес-среде, так как они предоставляют возможность представить себя или свою компанию в краткой и лаконичной форме. Они содержат основную информацию, такую как имя, должность, контактные данные и логотип компании. Визитка может также включать информацию о продуктах или услугах, предлагаемых организацией.

        Преимущества использования визиток очевидны. Во-первых, они являются незаменимым инструментом для обмена контактами и установления деловых связей. Когда вы встречаетесь с потенциальными клиентами, партнерами или коллегами, вы можете легко передать им свою визитку, чтобы они имели ваши контактные данные под рукой.

        Визитки также помогают создать профессиональный и надежный образ вашей компании. Хорошо оформленная и качественная визитка говорит о серьезности вашего бизнеса и профессионализме. Она может стать первым визуальным впечатлением о вас или вашей компании, поэтому важно уделить внимание ее дизайну и содержанию.</p>
                </Container>

        </>
    );
};

export default Vizitki;