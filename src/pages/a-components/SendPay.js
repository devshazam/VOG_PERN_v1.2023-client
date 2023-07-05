import React, { useContext, useState } from 'react';
import {Context} from "../../index";
import Spinner from 'react-bootstrap/Spinner';

import { createItem } from '../../http/deviceAPI.js'
import {observer} from "mobx-react-lite";

const SendPay = observer((props) => {
    const {user, device} = useContext(Context)
    const [spinner, setSpinner] = useState(true); // цена товара - расчитаная
    

console.log(props.name + props.value + props.description + props.file)

    const countPrice= () => {
           if(user.isAuth){
            if(device.file !== null && props.value !== 0){
                setSpinner(false)
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
                        console.log(data);
                        // window.location.href = data.confirmation.confirmation_url;
                        });
                    }
            }else{
                alert('Заполните файл и телефон и размеры!');
            }
        }else{
                alert('Пожалуйста Авторизуйтесь или Зарегистрируйтесь! Кнопки входа и регистрации в самом верху с левой стороны!');
            }
    }


    return (
        <>
            <div className="mid rittu">
                <h2>{props.value} p.</h2>
                
                <button type="submit" className="search-form__submit" onClick={countPrice}>{spinner ? 'КУПИТЬ' : <Spinner animation="border" />}</button>
            </div>
          
        </>
    );
});

export default SendPay;