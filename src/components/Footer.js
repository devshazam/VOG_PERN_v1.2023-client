import React from 'react';


function Footer(){
    return (<>
     <div id="footer" className="variant_5">
			<div id="rowFooter">
				<div id="leftFooter">
					<div className="footerRow">
						<div className="column">
							<span className="heading">Договор оферта</span>
							<ul className="footerMenu">

								<li><a href="/oferta">Договор оферта</a></li>

							</ul>
						</div>
						<div className="column">
							{/* <span className="heading">Политика конфиденциальности</span>
							<ul className="footerMenu">

								<li><a href="#">Политика конфиденциальности</a></li>

							</ul> */}

						</div>
						<div className="column">
							{/* <span className="heading">Помощь и сервисы</span>
							<ul className="footerMenu">

								<li><a href="#">О компании</a></li>

							</ul> */}
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
								<p>2023 © Копи-Принт - полиграфические услуги. Все права защищены.</p>
								<p className="hr">г. Волгоград, ул. Петропавловская 87</p>
							</td>
							<td className="rightColumn">
								<div className="wrap">
									<div className="telephone"><a href='tel:'>	
+7(909) 380-25-19</a></div>
									<div className="email">Email: <a
											href="mailto:<a href='mailto: info@kopi34.ru'>info@kopi34.ru</a>"><a
												href='mailto: info@kopi34.ru'>info@kopi34.ru</a></a>
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