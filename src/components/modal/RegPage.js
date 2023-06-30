import React, { useContext, useState } from 'react';
import {Context} from "../../index";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {observer} from "mobx-react-lite";

import { registration, confirmMail } from '../../http/userAPI'

const RegPage = observer(() => {
  const {helpers} = useContext(Context)
  const show = helpers.modalRegistration;
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [confirm, setConfirm] = useState(true)
  const [confirmCode, setConfirmCode] = useState(false)
  


  const hideModal = () => {
    helpers.setModalRegistration(false)
  }
  const makeReg = async () => {

    // TODO - pfibne jn 
      let data = await registration(mail, password, name, phone)
      console.log(data)
      alert('success!')
      helpers.setModalRegistration(false)
    
  }
  // Отправка кода подтверждения 
      const  sendConfirmCode = async () => {
            try{
              console.log(234);
              setConfirmCode(await confirmMail(mail))
              console.log(confirmCode)
            }catch(error){
              console.log(2333333333333333334);
            }
      }


      const  compareCodes = async (event) => {
        if(confirmCode == event.target.value){
          setConfirm(false)
        }else{
          alert(' Код НЕ совпадает!')
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
                
                {confirm ?
                  <>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={e => setMail(e.target.value)} />
                  </Form.Group>
                  <Button variant="primary" onClick={sendConfirmCode}>Подтвердить почту</Button>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Введите код подтверждения почты (из письма!):</Form.Label>
                      <Form.Control type="name" placeholder="Код подтверждения без пробелов!" onChange={event => compareCodes(event)} />
                  </Form.Group>
                  
                  </>
                :
                  <>
                  <h2>Ваш адрес {mail} подтвержден!</h2>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Имя:</Form.Label>
                    <Form.Control type="name" placeholder="Иванов Иван Иванович" onChange={e => setName(e.target.value)} />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Телефон для связи:</Form.Label>
                    <Form.Control type='text' onChange={e => setPhone(e.target.value)} placeholder="phone" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control type='text' onChange={e => setPassword(e.target.value)} placeholder="password" />
                  </Form.Group>
                  <Button variant="primary" onClick={makeReg}>Регистрация</Button>
                </>
                  }
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