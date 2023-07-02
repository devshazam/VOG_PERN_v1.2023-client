import React, { useContext, useState } from 'react';
import {Context} from "../../index";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {observer} from "mobx-react-lite";

import { login } from '../../http/userAPI'

const LoginPage = observer(() => {

  const {helpers, user} = useContext(Context)
  const show = helpers.modalLogin;
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const hideModal = () => {
  helpers.setModalLogin(false)

}


// TODO - доделать аинхронную отправку
  const makeLogin = () => {
    login(mail, password).then(data => {
      
      alert('success!');
      
      helpers.setModalLogin(false)
      user.setIsAuth(true)
      window.location.reload();
    })
    
  }

  return (
    <>


      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Форма входа на сайт</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" onChange={e => setMail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Пароль:</Form.Label>
                  <Form.Control type='text' onChange={e => setPassword(e.target.value)} placeholder="password" />
                </Form.Group>
                <Button variant="primary" onClick={makeLogin }>Вход</Button>
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

export default LoginPage;