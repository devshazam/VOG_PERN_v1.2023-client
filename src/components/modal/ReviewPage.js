import React, { useContext, useState } from 'react';
import {Context} from "../../index";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {observer} from "mobx-react-lite";

import { createReview } from '../../http/reviewAPI'

const ReviewPage = observer(() => {

  const {helpers, user} = useContext(Context)
  const show = helpers.modalReview;
  const [subject, setSubject] = useState('')
  const [review, setReview] = useState('')

    const hideModal = () => {
    helpers.setModalReview(false)
  }

// TODO - доделать аинхронную отправку
  const sendReview = () => {
    if (subject === '' || review === '') {
      alert("Пожалуйста введите текст!")
      return
    }
    createReview({subject, review}).then(data => {
      alert('СПАСИБО ЗА ОТЗЫВ!');
      helpers.setModalLogin(false);
    }).catch((error) => { 
        console.log(error.response.data.message, error)
        alert('Ошибка: 501 - сообщите код ошибки администратору сайта');
    });
    
  }

  return (
    <>


      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Оставьте свой отзыв:</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Тема:</Form.Label>
                  <Form.Control type="text" placeholder="тема" onChange={e => setSubject(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Отзыв:</Form.Label>
                  <Form.Control type='text' onChange={e => setReview(e.target.value)} placeholder="отзыв" />
                </Form.Group>
                <Button variant="primary" onClick={ sendReview }>Отправить</Button>
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

export default ReviewPage;