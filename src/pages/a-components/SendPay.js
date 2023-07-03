import React, { useContext } from 'react';
import {Context} from "../../index";

import { createItem } from '../../http/deviceAPI.js'


const SendPay = (props) => {
    const {user} = useContext(Context)
    

console.log(props.name + props.value + props.description + props.file)

    const countPrice= () => {
           if(user.isAuth){
            if(props.file !== null && props.value !== 0){
                    const formData = new FormData();     
                        formData.append('value', `${props.value}`)
                        formData.append('name', `${props.name}`)
                        formData.append('description', `${props.description}`)
                        formData.append('img', props.file)
                        formData.append('userId', `${user.user.id}`)    

                    if(Number(props.file.size) > 900000){
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
                <button type="submit" className="search-form__submit" onClick={countPrice}>КУПИТЬ</button>
            </div>
          
        </>
    );
};

export default SendPay;