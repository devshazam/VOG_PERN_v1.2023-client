import React, { useContext, useState } from 'react';
import {Context} from "../../index";
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { createItem } from '../../http/deviceAPI.js'
import {observer} from "mobx-react-lite";

const SendPay = observer((props) => {
    const {user, device} = useContext(Context)
    const [spinner, setSpinner] = useState(true); // цена товара - расчитаная
    

// console.log(props.name + props.value + props.description + props.file)

    const countPrice= () => {
           if(user.isAuth){
 
            if(device.file && props.value){
                setSpinner(false)
                // Отладочный вывод в консоль
                console.log('00-SendPay->Вывод перед отправкой запроса на сервер:', props.value, props.name, props.description, user.user.id)


               
                    const formData = new FormData();     
                        formData.append('value', `${props.value}`)
                        formData.append('name', `${props.name}`)
                        formData.append('description', `${props.description}`)
                        formData.append('img', device.file)
                        formData.append('userId', `${user.user.id}`)    

                    if(Number(device.file.size) > 900000){
                        alert('Картинка должна быть менее 900Kb');
                    }else{
                        createItem(formData)
                        .then(data => {
                        // console.log(data);
                        window.location.href = data.confirmation.confirmation_url;
                        });
                    }
            }else{
                alert('Не загружен файл или не заполнены размеры!');
            }
        }else{
                alert('Пожалуйста Авторизуйтесь или Зарегистрируйтесь! Кнопки входа и регистрации в самом верху с левой стороны!');
            }
    }


    return (
        <>

            <Row className="mb-3">
                    <Button type="submit"  variant="danger" onClick={countPrice}>{spinner ? 'КУПИТЬ' : <Spinner animation="border" />}</Button>
            </Row>

          
        </>
    );
});

export default SendPay;