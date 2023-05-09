import React from 'react';
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import { fetchOneDevice } from '../http/deviceAPI'
import Spinner from 'react-bootstrap/Spinner';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductView = () => {
    const { id } = useParams();
    const [goods, setGoods] = useState();

    useEffect(() => {
        fetchOneDevice(id).then(data => setGoods(data)).catch(e => console.log(e.message));
    //  if(goods) console.log(goods);
    }, [])

  
  
  if(!goods) return <Spinner animation="border" className='mt-5 ml-5' />



    return (
        <>


        <div id="content" className="col-sm-9">
            <div className="row">
                <div className="col-sm-6">
                    <ul className="thumbnails">
                        <li><span className="thumbnail fancybox"><img style={{width: 300}} src={`http://localhost:5000/${goods.img}`} /></span>
                        </li>
                    </ul>
                </div>
                
                <div className="col-sm-6">
                    <h1 className="productpage-title">ProductName</h1>
                    <ul className="list-unstyled productinfo-details-top">
                        <li>
                            <h2 className="productpage-price">Price - 10$ <span className="price-old">30</span></h2>
                        </li>
                        <li><span className="productinfo-tax">Скидка: 30 %</span></li>
                    </ul>
                    <hr/>
                    <ul className="list-unstyled product_info">
                        <li>
                            <label>До конца акции:</label>
                            <span> 12 дней</span></li>
                        <li>
                            <label>Адрес:</label>
                            <span>Kolpini</span></li>
                        <li>
                            <label>Телефон:</label>
                            <span>79865656564</span></li>
                    </ul>
                    <hr/>
                    <p className="product-desc">????</p>
                </div>
            </div>
  


        </div>
                    
      


        </>
    );
};

export default ProductView;