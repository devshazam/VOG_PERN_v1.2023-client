import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { createItem } from '../../http/deviceAPI.js'




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
        }else if(m1 >= 1 && m1 < 5){
            setValue(m1*600);
        }if(m1 >= 5 && m1 < 10){
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
            
        
            <Container>
                <Row>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka_belaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/belaya.jpg'></img>
                                    <p>Самоклейка - белая подложка (глянец/Мат)</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka-chernaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/chernaya.jpg'></img>
                                    <p>Самоклейка - подложка черная</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka-prozrachnaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/prozrachnaya.jpg'></img>
                                    <p>Самоклейка - прозрачная</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka-svetootrazhayuschaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/svetootrajaushaya.jpg'></img>
                                    <p>Самоклейка - светоотражающая</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka-fotolyuminiscentnaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/fotoluminiscent.jpg'></img>
                                    <p>Самоклейка - фотолюминесцентная</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka-cvetnaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/cvetnaya.jpg'></img>
                                    <p>Самоклейка - цветная (Oracl, Averal, LG)</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka-dezaynerskaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/dezainerskaya.jpg'></img>
                                    <p>Самоклейка - дизайнерская</p>
                                </div>
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} md={6} >
                        <div className='column__first'>
                            <a href='/samokleyka-perforirovannaya'>
                                <div className='img-wrapper'>
                                    <img src='/file/samokleyki/perforirovanaya.jpg'></img>
                                    <p>Самоклейка - перфорированная под печать</p>
                                </div>
                            </a>
                        </div>
                    </Col> 

                </Row>
            </Container>
          

        </>
    );
};

export default Vizitki;