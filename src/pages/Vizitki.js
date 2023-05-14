import React, {useState, useEffect} from 'react';


const Vizitki = () => {
    const [value, setValue] = useState(1000);
    const [side, setSide] = useState(1);
    const [num, setNum] = useState(1);
    const price = 1000;

    useEffect(() => {
        setValue(price * side * num);
      }, [side, num]); // <- add the count variable here
  
    function handleChange(event) {
		setSide(event.target.value);
        // setValue(price * side * num);
	}
    function handleChange2(event) {
		setNum(event.target.value);
        // setValue(price * side * num);
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
            <button type="submit" className="search-form__submit">search</button>
        </div>
        <div className="mid">
            <select name="cars" className="search-form__field" id="cars" value={side} onChange={handleChange}>
                <option value="1" >Односторонние{side}</option>
                <option value="2" >Двусторонние{side}</option>
            </select>
            <select name="cars" className="search-form__field" id="cars" value={num} onChange={handleChange2}>
                <option value="1" >Без ламинации</option>
                <option value="2" >Ламинацияе</option>
            </select>
 
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