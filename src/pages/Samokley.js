import React, {useState, useEffect} from 'react';



import { createItem } from '../http/deviceAPI.js'




const Vizitki = () => {



    const [value, setValue] = useState(0);
    const [side, setSide] = useState(0);
    const [vid, setVid] = useState(0);

     const [tel, setTel] = useState(0);
        const [file, setFile] = useState(null);
    const num = 'one';
    const lam = 'one';


    useEffect(() => {
        let m1 = Number(side)*Number(vid);
        if(m1 < 1){
            setValue(m1*650);
        }else if(m1 == 1 && m1 < 5){
            setValue(m1*600);
        }if(m1 == 5 && m1 < 10){
            setValue(m1*550);
        }if(m1 >= 10){
            setValue(m1*500);
        }

      }, [side, vid]); // <- add the count variable here
  
    function handleChange(event) {
		setSide(event.target.value);
        // setValue(price * side * num);
	}
    function handleChange2(event) {
		setVid(event.target.value);
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

                createItem(formData)
                .then(data => {
                console.log(data);
                window.location.href = data.confirmation.confirmation_url;
                    
                });
    }else{
        alert('Заполните файл и телефон и размеры!');
    }
    }



    return (
        <>
            
        
            <div id="right">

<div className="wrapper">
    <div className="col-6">
        <img src="/file/pic/samo.jpg" alt="полиграфия"></img>
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


    <h2>Самоклейки</h2>
						<p>Самоклеящаяся пленка – это материал, который имеет специальное покрытие на одной стороне, позволяющее ему приклеиваться к различным поверхностям без использования дополнительных клеевых веществ. Ниже приведен текст, описывающий самоклеящуюся пленку:

Самоклеящаяся пленка – это универсальный материал, который может быть использован в различных областях. Она состоит из основы, которая обычно выполнена из винила, и специального клеящего слоя, нанесенного на одну сторону пленки.

Одним из главных преимуществ самоклеящейся пленки является ее легкость в использовании. Она может быть легко приклеена к различным поверхностям, включая стекло, металл, пластик, дерево и т.д. Клейкий слой обеспечивает надежное и долговременное сцепление с поверхностью, сохраняя при этом гибкость и устойчивость к воздействию окружающей среды.</p>
                        
</div>
          

        </>
    );
};

export default Vizitki;