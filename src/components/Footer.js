import React from 'react';


function Footer(){
    return (<>
     <div id="footer" className="variant_5">
			<div id="rowFooter">
				<div id="leftFooter">
					<div className="footerRow">
						<div className="column">
							<span className="heading">Каталог</span>
							<ul className="footerMenu">

								<li><a href="/catalog/poligrafiya/">Полиграфия</a></li>


								<li><a href="/catalog/pereplet-dokumentov/">Переплет документов</a></li>


								<li><a href="/catalog/srochnaya-poligrafiya/">Срочная полиграфия</a></li>


								<li><a href="/catalog/lazernaya-gravirovka/">Услуги лазерной гравировки .</a></li>


								<li><a href="/catalog/fotouslugi/">Фотоуслуги</a></li>


								<li><a href="/catalog/pechati-i-shtampy/">Печати и штампы</a></li>


								<li><a href="/catalog/podarki-s-vashim-foto/">Подарки с вашим фото</a></li>

							</ul>
						</div>
						<div className="column">
							<span className="heading">Наши предложения</span>
							<ul className="footerMenu">

								<li><a href="/new/">Новинки</a></li>


								<li><a href="/popular/">Популярные товары</a></li>


								<li><a href="/sale/">Распродажи и скидки</a></li>


								<li><a href="/recommend/">Рекомендуемые товары</a></li>

							</ul>

						</div>
						<div className="column">
							<span className="heading">Помощь и сервисы</span>
							<ul className="footerMenu">

								<li><a href="/about/">О компании</a></li>


								<li><a href="/stock/">Акции</a></li>


								<li><a href="/about/delivery/">Доставка и оплата</a></li>


								<li><a href="/catalog/">Каталог</a></li>


								<li><a href="/about/contacts/">Контакты</a></li>


								<li><a href="/reviews/">Отзывы</a></li>


								<li><a href="/faq">Вопрос-ответ</a></li>


								<li><a href="/trebovaniya-k-maketam">Требования к макетам</a></li>


								<li><a href="/blog/">Статьи</a></li>

							</ul>
						</div>
					</div>
				</div>
				<div id="rightFooter">
					<table className="rightTable">
						<tr className="footerRow">
							<td className="leftColumn">
								<div className="logo">
									<span><img src="/local/templates/dresscode/images/logoW.png" alt=""></img></span>
								</div>
								<p>2023 © o-pechatka.ru - полиграфические услуги. Все права защищены.</p>
								<p className="hr">г. Москва, Заревый пр., 12 <a href="/about/contacts/"
										className="showMap">Посмотреть на карте</a></p>
							</td>
							<td className="rightColumn">
								<div className="wrap">
									<div className="telephone"><a href='tel:+79959039031'>+7(995) 903-90-31</a></div>
									<div className="email">Email: <a
											href="mailto:<a href='mailto: zakaz.opechatka@list.ru'>zakaz.opechatka@list.ru</a>"><a
												href='mailto: zakaz.opechatka@list.ru'>zakaz.opechatka@list.ru</a></a>
									</div>
									<ul className="list">
										<li>График работы с 10:00 до 21:00</li>
									</ul>
									<div className="snl"></div>
								</div>
							</td>
						</tr>
                    </table>
						
				</div>
			</div>
		</div>
    </>
        
    );
};

export default Footer;