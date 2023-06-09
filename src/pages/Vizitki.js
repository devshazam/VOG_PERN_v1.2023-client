import React, {useState, useEffect} from 'react';


import { vizit } from '../arrays/vizitki.js';

import { createItem } from '../http/deviceAPI'




const Vizitki = () => {



    const [value, setValue] = useState(288);
    const [side, setSide] = useState('one');
    const [vid, setVid] = useState('one');
    const [lam, setLam] = useState('one');
    const [num, setNum] = useState('one');

     const [tel, setTel] = useState(0);
        const [file, setFile] = useState(null);


console.log(vizit.one.one.one.one);
    useEffect(() => {
        setValue(vizit[side][vid][lam][num]);


      }, [side, num, lam, vid]); // <- add the count variable here
  
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
    function handleChange4(event) {
		setNum(event.target.value);
        // setValue(price * side * num);
	}


    const gGoods= () => {
        if(file !== null && tel !== 0){
        const formData = new FormData();     
        formData.append('value', `${value}`)
        formData.append('side', side)
        formData.append('img', file)
        formData.append('vid', vid)
        formData.append('lam', lam)
        formData.append('tel', `${tel}`)
        formData.append('num', num)

        createItem()
          .then(data => {
        console.log(data);
        window.location.href = data.confirmation.confirmation_url;
            
        });
    }else{
        alert('Заполните файл и телефон!');
    }
    }



    return (
        <>
            
        
            <div id="right">

<div className="wrapper">
    <div className="col-6">
        <img src="/file/pic/vizitki.png" alt="полиграфия"></img>
        </div>
    <div className="col-6">
        <div className="mid rittu">
            <h2>{value} p.</h2>
            <button type="submit" className="search-form__submit" onClick={gGoods}>КУПИТЬ</button>
        </div>
        <div className="mid">
            <div className="mid-23">
                <p>Стороны печати</p>
                <select name="side" className="search-form__field" id="cars" value={side} onChange={handleChange}>
                    <option value="one" >Односторонние</option>
                    <option value="two" >Двусторонние</option>
                </select>
            </div>
            <div className="mid-23">
                <p>Бумага</p>
                <select name="vid" className="search-form__field" id="cars" value={vid} onChange={handleChange2}>
                    <option value="one" >Матовая</option>
                    <option value="two" >Глянцевая</option>
                </select>
            </div>
        </div>
        <div className="mid">
            <div className="mid-23">
                <p>Ламинация</p>
                <select name="lam" className="search-form__field" id="cars" value={lam} onChange={handleChange3}>
                    <option value="one" >Без ламинации</option>
                    <option value="two" >Глянцевая</option>
                    <option value="tre" >Матовая</option>
                </select>
            </div>
            <div className="mid-23">
                <p>Кол-во</p>
                <select name="num" className="search-form__field" id="cars" value={num} onChange={handleChange4}>
                    <option value="one" >96</option>
                    <option value="two" >200</option>
                    <option value="tre" >500</option>
                    <option value="for" >1000</option>
                </select>
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


    <h2>Визитки</h2>
						<p>Визитка – это небольшая карточка, обычно размером с визитную карточку, которая содержит информацию о человеке или организации. Она является одним из наиболее популярных и эффективных инструментов маркетинга и коммуникации.

Визитки играют важную роль в бизнес-среде, так как они предоставляют возможность представить себя или свою компанию в краткой и лаконичной форме. Они содержат основную информацию, такую как имя, должность, контактные данные и логотип компании. Визитка может также включать информацию о продуктах или услугах, предлагаемых организацией.

Преимущества использования визиток очевидны. Во-первых, они являются незаменимым инструментом для обмена контактами и установления деловых связей. Когда вы встречаетесь с потенциальными клиентами, партнерами или коллегами, вы можете легко передать им свою визитку, чтобы они имели ваши контактные данные под рукой.

Визитки также помогают создать профессиональный и надежный образ вашей компании. Хорошо оформленная и качественная визитка говорит о серьезности вашего бизнеса и профессионализме. Она может стать первым визуальным впечатлением о вас или вашей компании, поэтому важно уделить внимание ее дизайну и содержанию.</p>
                        
</div>
          

        </>
    );
};

export default Vizitki;