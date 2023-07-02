import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";

import { createItem } from '../../http/deviceAPI.js'


const Banner = () => {
    const {user} = useContext(Context)
    

    const [value, setValue] = useState(0); // цена товара - расчитаная
    const [width, setWidth] = useState(0); // ширина баннеар
    const [height, setHeight] = useState(0); // высота баннера
    const [density, setDensity] = useState('400-440'); // плотность баннера 
    const [tel, setTel] = useState(0); // Телефон
    const [file, setFile] = useState(null); // Файл
    const name = 'Баннер';


    useEffect(() => {
            let midNum = Number(width)*Number(height) / 1000000;
            let midNum2;
            if(midNum < 1){
                if(density == '400-440'){midNum2 = midNum*550;}else{midNum2 = midNum*650;}
            }else if(midNum >= 1 && midNum < 5){
                if(density == '400-440'){ midNum2 = midNum*500;}else{midNum2 = midNum*600;}
            }if(midNum >= 5 && midNum < 10){
                if(density == '400-440'){ midNum2 = midNum*400;}else{midNum2 = midNum*500;}
            }if(midNum >= 10 && midNum < 50){
                if(density == '400-440'){ midNum2 = midNum*350;}else{midNum2 = midNum*450;}
            }if(midNum >= 50 && midNum < 100){
                if(density == '400-440'){ midNum2 = midNum*300;}else{midNum2 = midNum*400;}
            }if(midNum >= 100 && midNum < 500){
                if(density == '400-440'){ midNum2 = midNum*280;}else{midNum2 = midNum*380;}
            }if(midNum >= 500){
                if(density == '400-440'){ midNum2 = midNum*240;}else{midNum2 = midNum*340;}
            }
            setValue(Math.round((midNum2) * 100) / 100);
      }, [width, density, height]); // <- add the count variable here
  


    const countPrice= () => {
           if(user.isAuth){if(file !== null && tel !== 0 && value !== 0){
                    const formData = new FormData();     
                        formData.append('value', `${value}`)
                        formData.append('name', `${name}`)
                        formData.append('description', `Наименование: ${name}; Цена: ${value} рублей; Ширина: ${width} мм; Высота: ${height} мм; Плотность: ${density} грамм;`)
                        formData.append('img', file)
                        formData.append('userId', `${user.user.id}`)    

                    if(Number(file.size) > 900000){
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
            }}else{
                alert('Пожалуйста Авторизуйтесь или Зарегистрируйтесь! Кнопки входа и регистрации в самом верху с левой стороны!');
            }
    }


    return (
        <>
            
        
            <div id="right">

                <div className="wrapper">
                <div className="col-6">
                    <img src="/file/pic/banner.jpg" alt="полиграфия"></img>
                    </div>
                <div className="col-6">
                    <div className="mid rittu">
                        <h2>{value} p.</h2>
                        <button type="submit" className="search-form__submit" onClick={countPrice}>КУПИТЬ</button>
                    </div>
                    <div className="mid">
                        <div className="mid-23">
                            <p>Ширина (мм)</p>
                            <input name="width" className="search-form__field" id="cars" placeholder="Миллиметры" onChange={e => setWidth(e.target.value)}>
                            </input>
                        </div>
                        <div className="mid-23">
                            <p>Высота (мм)</p>
                            <input name="height" className="search-form__field" id="cars" placeholder="Миллиметры" onChange={e => setHeight(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="mid-23">
                            <p>Плотность</p>
                            <select name="density" className="search-form__field" value={density} id="cars" onChange={e => setDensity(e.target.value)}>
                                <option value="400-440" >400-440</option>
                                <option value="500" >500</option>
                            </select>
                        </div>
                        <div className="mid-23">
                            
                        </div>
                    </div>
                    <div className="mid">
                        <div className="mid-23">
                            <p>Телефон для связи</p>
                            <input type="text" name="tel" className="search-form__field"  placeholder="+7 800 123-45-67"  onChange={e => setTel(e.target.value)} >

                            </input>
                        </div>
                        <div className="mid-23">
                            <p>Картинка</p>
                            <input type="file" name="foto" className="search-form__field" onChange={e => setFile(e.target.files[0]) }>

                            </input>
                        </div>
                    </div>
                    
            

                </div>
                </div>


                <h2>Баннеры</h2>
                <p>Баннеры являются одним из наиболее эффективных и популярных способов рекламы и информационного обозначения. Печать баннеров — это процесс создания крупноформатных материалов с помощью специального оборудования. Ниже приведен текст, описывающий процесс печати баннеров:

                Печать баннеров – это профессиональный процесс, при котором создаются крупноформатные материалы с использованием специализированного оборудования и высококачественных материалов. Он предоставляет возможность эффективно привлекать внимание к продукту, услуге или событию.

                Печать баннеров начинается с подготовки дизайна и макета. Дизайнер создает графическое оформление баннера, учитывая его цель и целевую аудиторию. Он может включать в себя логотипы, изображения, текст и другие визуальные элементы.</p>
                        
            </div>
          

        </>
    );
};

export default Banner;