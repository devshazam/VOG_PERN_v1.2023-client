import React, { useContext, useState } from 'react';
import {Context} from "../../index";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


import isEmail from 'validator/lib/isEmail';

import {observer} from "mobx-react-lite";

import { registration } from '../../http/userAPI'

const RegPage = observer(() => {
  const {helpers} = useContext(Context)
  const show = helpers.modalRegistration;
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  

  const hideModal = () => {
    helpers.setModalRegistration(false)
  }

  const makeReg = async () => {
    try{
        if(mail && password && name && phone){
            if(isEmail(mail)){
              try{
                let data = await registration(mail, password, name, phone)
                console.log(data)
                alert('success!')
                helpers.setModalRegistration(false)
                window.location.reload();
              }catch(e){
                alert('Ошибка Сервера - Обратитесь к администратору!')
              }
            }else{
              alert("Не корректный email!")
            }
        }else{
          alert("Нужно заполнить все поля!")
        }
  
  }catch(error){
      alert(error.response.data.message)
    }
      
  }

  return (
    <>


      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Форма регистрации на сайте</Modal.Title>
        </Modal.Header>
        <Modal.Body>

              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Имя:</Form.Label>
                    <Form.Control type="name" placeholder="Иванов Иван Иванович" onChange={e => setName(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={e => setMail(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Телефон для связи:</Form.Label>
                    <Form.Control type='text' onChange={e => setPhone(e.target.value)} placeholder="+7 (999) 123-45-67" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type='password' onChange={e => setPassword(e.target.value)} placeholder="password" />
                  </Form.Group>
                  <Button variant="primary" onClick={makeReg}>Регистрация</Button>
          </Form>

          
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
});

export default RegPage;