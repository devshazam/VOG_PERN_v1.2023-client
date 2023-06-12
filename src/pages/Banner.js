import React, {useState, useEffect} from 'react';


import { createItem } from '../http/deviceAPI.js'




const Vizitki = () => {



    const [value, setValue] = useState(0);
    const [side, setSide] = useState(0);
    const [vid, setVid] = useState(0);
    const [lam, setLam] = useState('one');

     const [tel, setTel] = useState(0);
        const [file, setFile] = useState(null);
        const num = 'one';


    useEffect(() => {
        let m1 = Number(side)*Number(vid);
        if(m1 < 1){
            if(lam == 'one'){ setValue(m1*550);}else{setValue(m1*650);}
        }else if(m1 >= 1 && m1 < 5){
            if(lam == 'one'){ setValue(m1*500);}else{setValue(m1*600);}
        }if(m1 >= 5 && m1 < 10){
            if(lam == 'one'){ setValue(m1*400);}else{setValue(m1*500);}
        }if(m1 >= 10 && m1 < 50){
            if(lam == 'one'){ setValue(m1*350);}else{setValue(m1*450);}
        }if(m1 >= 50 && m1 < 100){
            if(lam == 'one'){ setValue(m1*300);}else{setValue(m1*400);}
        }if(m1 >= 100 && m1 < 500){
            if(lam == 'one'){ setValue(m1*280);}else{setValue(m1*380);}
        }if(m1 >= 500){
            if(lam == 'one'){ setValue(m1*240);}else{setValue(m1*340);}
        }


      }, [side, lam, vid]); // <- add the count variable here
  
    function handleChange(event) {
		setSide(event.target.value);
        // setValue(price * side * num);
	}
    function handleChange2(event) {
		setVid(event.target.value);
        // setValue(price * side * num);
	}
    function handleChange3(event) {
		setLam(event.target.value);
        // setValue(price * side * num);
	}



    const gGoods= () => {
        if(file !== null && tel !== 0 && value !== 0){
                const formData = new FormData();     
                formData.append('value', `${value}`)
                formData.append('side', side)
                formData.append('img', file)
                formData.append('vid', vid)
                formData.append('lam', lam)
                formData.append('tel', `${tel}`)
                formData.append('num', num)

                if(Number(file.size) > 900000){
                    alert('Картинка должна быть менее 900Kb');
                }else{
                    createItem(formData)
                    .then(data => {
                    console.log(data);
                    window.location.href = data.confirmation.confirmation_url;
                        
                    });
                }
    }else{
        alert('Заполните файл и телефон и размеры!');
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
            <button type="submit" className="search-form__submit" onClick={gGoods}>КУПИТЬ</button>
        </div>
        <div className="mid">
            <div className="mid-23">
                <p>Ширина</p>
                <input name="side" className="search-form__field" id="cars" value={side} onChange={handleChange}>
                </input>
            </div>
            <div className="mid-23">
                <p>Высота</p>
                <input name="vid" className="search-form__field" id="cars" value={vid} onChange={handleChange2}>
                </input>
            </div>
        </div>
        <div className="mid">
            <div className="mid-23">
                <p>Плотность</p>
                <select name="lam" className="search-form__field" id="cars" value={lam} onChange={handleChange3}>
                    <option value="one" >400-440</option>
                    <option value="two" >500</option>
                </select>
            </div>
            <div className="mid-23">
                
            </div>
        </div>
        <div className="mid">
            <div className="mid-23">
                <p>Телефон для связи</p>
                <input type="text" name="tel" className="search-form__field"  value={tel}  onChange={e => setTel(e.target.value)} >

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

export default Vizitki;