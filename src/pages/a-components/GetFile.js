
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import React, { useState, useEffect, useContext } from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const GetFile = observer(() => {
    const {user, device} = useContext(Context)
    const [file, setFile] = useState(null); // Файл
    
    
        useEffect(() => {
                device.setFile(file)
        }, [file]); // <- add the count variable here

    return (
        <>

                <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Телефон:</Form.Label>
                            <Form.Control type="text" placeholder="+7 (999) 123-45-67" required defaultValue={user.user.phone && user.user.phone} disabled  />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста введите ваш телефон!
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom03" >
                                <Form.Label>Файл (jpg; До 900kB):</Form.Label>
                                <Form.Control type="file" required onChange={e => setFile(e.target.files[0]) }/>
                                <Form.Control.Feedback type="invalid">
                                Пожалуйста загрузите файл!
                                </Form.Control.Feedback>
                                
                            </Form.Group>
                            
                        </Row>
          
        </>
    );
});

export default GetFile;