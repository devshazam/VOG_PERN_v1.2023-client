import {useState, useEffect} from 'react';
import { fetchHomeDevices } from '../http/deviceAPI'
import Spinner from 'react-bootstrap/Spinner';



export default function  Home(){
        const [goods, setGoods] = useState();

//     useEffect(() => {
//         fetchHomeDevices().then(data => setGoods(data)).catch(e => console.log(e.message));
//     //  if(goods) console.log(goods);
//     }, [])

// if(!goods) return <Spinner animation="border" classNameName='mt-5 ml-5' />


    return ( <>
        <div id="right">
						<div id="promoBlock">
							<div id="sliderBlock">
								<div id="slider">
									<ul className="slideBox">
										<li id="bx_1712592909_114">
											<div className="sliderContent">
												<div className="bigText">Изготовление печатей<br></br>
													и штампов<br></br>
													с гарантией 5 лет</div>
												<div className="smallText"></div>
												<a href="/catalog/pechati-i-shtampy/" className="cButton">Перейти в
													раздел</a>
											</div>
											<span
												data-large="/file/b04ee18c22eaab05c343c45f3aa63a09.jpg"
												data-normal="/file/b04ee18c22eaab05c343c45f3aa63a09.jpg"></span>
										</li>
										{/* <li id="bx_1712592909_115">
											<div className="sliderContent" style={{display: 'none'}}>
												<div className="bigText">Сувенирная продукция<br></br>
													с нанесением фото<br></br>
													или логотипа<br></br>
													от 1 штуки</div>
												<div className="smallText"></div>
												<a href="#" className="cButton">Перейти в раздел</a>
											</div>
											<span
												data-large="/file/b04ee18c22eaab05c343c45f3aa63a09.jpg"
												data-normal="/file/b04ee18c22eaab05c343c45f3aa63a09.jpg"></span>
										</li> */}
									</ul>
									{/* <a href="#" className="sliderBtnLeft"></a>
									<a href="#" className="sliderBtnRight"></a> */}
								</div>
							</div>
						</div>

						<div className="index-banners-wrap">
							<div className="index-banners">
								<div className="elem-column">
									<a href="/catalog/pechati-i-shtampy/" className="elem-wrap" id="bx_3485106786_15">
										<div className="elem">
											<div className="bg" id="bg1">
											</div>
											<div className="text-wrap">
												<div className="name">Изготовление печатей и штампов</div>
												<div className="descr"></div>
												<div className="btn-simple btn-micro">Перейти</div>
											</div>
										</div>
									</a>
								</div>
								<div className="elem-column">
									<a href="/catalog/podarki-s-vashim-foto/" className="elem-wrap" id="bx_3485106786_16">
										<div className="elem">
											<div className="bg" id="bg2">
											</div>
											<div className="text-wrap">
												<div className="name">Сувенирная продукция</div>
												<div className="descr"></div>
												<div className="btn-simple btn-micro">Перейти</div>
											</div>
										</div>
									</a> <a href="services/fotouslugi/foto-na-dokumenty.html" className="elem-wrap"
										id="bx_3485106786_17">
										<div className="elem">
											<div className="bg" id="bg3">
											</div>
											<div className="text-wrap">
												<div className="name">СРОЧНОЕ фото на документы</div>
												<div className="descr"></div>
												<div className="btn-simple btn-micro">Перейти</div>
											</div>
										</div>
									</a>
								</div>
								<div className="elem-column">
									<a href="/services/srochnaya-poligrafiya/shirokoformatnaya-pechat-foto-prays.html"
										className="elem-wrap" id="bx_3485106786_18">
										<div className="elem">
											<div className="bg" id="bg4">
											</div>
											<div className="text-wrap">
												<div className="name">Широкоформатная печать</div>
												<div className="descr"></div>
												<div className="btn-simple btn-micro">Перейти</div>

											</div>
										</div>
									</a>
								</div>
								<div className="elem-column">
									<a href="/services/poligrafiya/nakleyki-foto-prays/" className="elem-wrap"
										id="bx_3485106786_19">
										<div className="elem">
											<div className="bg" id="bg5">
											</div>
											<div className="text-wrap">
												<div className="name">Изготовление наклеек</div>
												<div className="descr"></div>
												<div className="btn-simple btn-micro">Перейти</div>
											</div>
										</div>
									</a> <a href="https://xn----8sbas0aui0a7b.xn--p1ai/services/srochnaya-poligrafiya/"
										className="elem-wrap" id="bx_3485106786_20">
										<div className="elem">
											<div className="bg"  id="bg6">
											</div>
											<div className="text-wrap">
												<div className="name">Срочное копирование и печать документов</div>
												<div className="descr"></div>
												<div className="btn-simple btn-micro">Перейти</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>






						
						
						

						<h2>Полиграфия в Волгограде</h2>
						<p>Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформлениеТекст для примера - сколько угодно текста - любое оформлениеТекст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление Текст для примера - сколько угодно текста - любое оформление</p>
						
					</div>
    </>); 
}