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
											<div className="sliderContent" style="display:none">
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
										<li id="bx_1712592909_115">
											<div className="sliderContent" style="display:none">
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
										</li>
									</ul>
									<a href="#" className="sliderBtnLeft"></a>
									<a href="#" className="sliderBtnRight"></a>
								</div>
							</div>
						</div>

						<div className="index-banners-wrap">
							<div className="index-banners">
								<div className="elem-column">
									<a href="/catalog/pechati-i-shtampy/" className="elem-wrap" id="bx_3485106786_15">
										<div className="elem">
											<div className="bg"
												style="background-image: url('/upload/iblock/53a/53a3e8ed24fc95b0de1bc92ada4f8b08.jpg');">
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
											<div className="bg"
												style="background-image: url('/upload/iblock/a04/a041fd5cf666b83dfebb11fd40906c4e.jpg');">
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
											<div className="bg"
												style="background-image: url('/upload/iblock/b14/b149ba26b09c036fed4225bf6cfe9f00.jpg');">
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
											<div className="bg"
												style="background-image: url('/upload/iblock/b4f/b4fb3135a72d2a778b84be95a781c6f9.jpg');">
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
											<div className="bg"
												style="background-image: url('/upload/iblock/978/978d05cba541f418f6f7a8987b1d3ab8.jpg');">
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
											<div className="bg"
												style="background-image: url('/upload/iblock/9df/9df51b9c7771bbb095cd25aa008fd648.jpg');">
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
						<p>В нашей типографии печать продукции исключительно высокого качества, что достигается
							выполнением всех требований и пожеланий заказчика, применением разных видов печати и
							оптимальных способов постпечатной обработки. Клиенты получают лучшую продукцию, которая
							продумана до мельчайших деталей.</p>
						<h3>Наши главные преимущества</h3>
						<p>Обратившись в &laquo;О-Печатка&raquo;, каждый заказчик сможет получить такие преимущества:
						</p>
						<ul>
							<li>Высокая скорость исполнения заказов. Специалисты имеют необходимые знания и навыки,
								работают на современном оборудовании, что позволяет выполнять необходимые работы в
								максимально короткие сроки.</li>
							<li>Высокое качество. Строгий контроль предоставляемых услуг обеспечивает высокий уровень
								сервиса, который смогли оценить наши клиенты.</li>
							<li>Доступная стоимость услуг. Наша полиграфия в Москве предлагает широкий спектр услуг по
								доступной стоимости.</li>
						</ul>
						<p>Копировальный центр &laquo;О-Печатка&raquo; &ndash; надежный и проверенный партнер, когда
							нужна быстрая и качественная обработка фото, документов и других материалов. Использование
							современного профессионального оборудования и новейших технологий, большой опыт сотрудников
							позволяют решать задачи любой сложности, максимально удовлетворяя требования и пожелания
							заказчика. В нашей типографии печать заказа любого масштаба выполняется в срок, гарантируем
							высокое качество конечного результата и доступные цены.</p>
						<span id="bx-cursor-node"> </span><br></br>
					</div>
    </>); 
}