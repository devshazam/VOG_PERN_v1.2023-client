import React, { useContext, useState } from 'react';
import {Context} from "../../index";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {observer} from "mobx-react-lite";

import { registration } from '../../http/userAPI'

const RegPage = observer(() => {
  const {helpers} = useContext(Context)
  const show = helpers.modalRegistration;
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  
  const hideModal = () => {
    helpers.setModalRegistration(false)
  }
  const makeReg = () => {
    registration(mail, password).then(data => {
      
      alert('success!');
      
      helpers.setModalRegistration(false)
    })
    
  }
  


  return (
    <>


      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" onChange={e => setMail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control type='text' onChange={e => setPassword(e.target.value)} placeholder="password" />
                </Form.Group>
                <Button variant="primary" onClick={makeReg}>Primary</Button>
          </Form>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default RegPage;