import React, {useState, useEffect} from 'react';


import { createItem } from '../http/deviceAPI'




const Vizitki = () => {

    const vizit = {
        one: {
            one: {
                one: {
                    one: 288,
                    two: 560,
                    tre: 1000,
                    for: 1900
                    
                },
                two: {
                    
                    one: 379.5,
                    two: 1060,
                    tre: 2250,
                    for: 4275
        
                },
                tre: {
                    
                    one: 624,
                    two: 1260,
                    tre: 2750,
                    for: 5225
        
                }
            },
            // ukzywtdst 
            two: {
                one: {
                    one: 288,
                    two: 500,
                    tre: 1100,
                    for: 2090
                    
                },
                two: {
                    
                    one: "Нет",
                    two: "Нет",
                    tre: "Нет",
                    for: "Нет"
        
                },
                tre: {
                    
                    one: "Нет",
                    two: "Нет",
                    tre: "Нет",
                    for: "Нет"
        
                }
    
            }

        },
        two: {
            one: {
                one: {
                    one: 432,
                    two: 800,
                    tre: 1750,
                    for: 3325
                    
                },
                two: {
                    
                    one: 672,
                    two: 1300,
                    tre: 3000,
                    for: 5700
        
                },
                tre: {
                    
                    one: 768,
                    two: 1500,
                    tre: 3500,
                    for: 6650
        
                }
            },
            two: {
                one: {
                    one: 480,
                    two: 940,
                    tre: 2250,
                    for: 4269
                    
                },
                two: {
                    
                    one: "Нет",
                    two: "Нет",
                    tre: "Нет",
                    for: "Нет"
        
                },
                tre: {
                    
                    one: "Нет",
                    two: "Нет",
                    tre: "Нет",
                    for: "Нет"
        
                }
    
            }

        }
    };
    




    

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
        
            alert('Объявление успешно создано!');
            
        });
    }



    return (
        <>
            
        
            <div id="right">

<div className="wrapper">
    <div className="col-6">
        <img src="/upload/resize_cache/iblock/94a/220_200_1/rvtnixjiexruj28dqmlod9okk4crggsh.png" ></img>
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


    <h2>Полиграфия в Москве</h2>
						<p>Печатная продукция &ndash; один из эффективных маркетинговых инструментов, который позволяет
							значительно увеличить объемы продаж и привлечь новых клиентов, повысить уровень лояльности,
							как следствие, бизнес растет и развивается. Преимущества печатной продукции очевидны:
							высокая эффективность, доступная цена, универсальность, возможность постоянного
							использования, наглядная демонстрация особенностей и преимуществ товара, услуги, в целом
							бренда. Поэтому печать листовок, буклетов, флаеров, календарей и др. лучше доверить
							профессионалам нашего центра.</p>
						<h3>Услуги полиграфии &laquo;О-Печатка&raquo;</h3>
						<p>У нас можно заказать такие услуги:</p>
						<ul>
							<li>Изготовление листовок, календарей, брошюр, наклеек, буклетов и другой полиграфической
								продукции.</li>
							<li>Переплет документов.</li>
							<li>Срочную полиграфию: ксерокопии, сканирование, ламинирование, широкоформатные печать и
								сканирование.</li>
							<li>Лазерную гравировку.</li>
							<li>Фотоуслуги (печать фотографий, изготовление фото на документы).</li>
							<li>Изготовление печатей и штампов.</li>
							<li>Изготовление подарочной продукции с фото: календарей, чашек, футболок, наволочек на
								подушки, пазлов, магнитов, часов, слюнявчиков, игральных карт и др.</li>
						</ul>
                        
</div>
          

        </>
    );
};

export default Vizitki;