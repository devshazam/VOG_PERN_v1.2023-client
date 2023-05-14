import React, { useContext } from 'react';

import { useNavigate } from "react-router-dom";

const Header = () => { 

 

    return (
      <>

<div id="headerLine2" className="color_theme">
			<div className="limiter">
				<div className="headerLineContainer">
					<div className="headerLineColumn">
						<div id="geoPosition">
							<ul>

								<li>
									<div className="user-geo-position">
										<div className="user-geo-position-label">Ваш город:</div>
										<div className="user-geo-position-value"><a href="#"
												className="user-geo-position-value-link"><span>Определение</span></a></div>
									</div>
								</li>
								<li className="null">
									<div id="geo-location-window" className="hidden">
										<div className="geo-location-window-container">
											<div className="geo-location-window-container-bg">
												<div className="geo-location-window-heading"> Выберите ваш город <a href="#"
														className="geo-location-window-exit"></a></div>
												<div className="geo-location-window-wp">
													<div className="geo-location-window-search">
														<input type="text" autocomplete="new-password" value=""
															placeholder=" Выберите ваш город"
															className="geo-location-window-search-input"></input>
														<div className="geo-location-window-search-values-cn">
															<div className="geo-location-window-search-values"></div>
														</div>
													</div>
													<div className="geo-location-window-button-container">
														<a href="#"
															className="geo-location-window-button disabled">Запомнить город
															<span id="geo-location-window-fast-loader">
																<span className="f_circleG" id="frotateG_01"></span>
																<span className="f_circleG" id="frotateG_02"></span>
																<span className="f_circleG" id="frotateG_03"></span>
																<span className="f_circleG" id="frotateG_04"></span>
																<span className="f_circleG" id="frotateG_05"></span>
																<span className="f_circleG" id="frotateG_06"></span>
																<span className="f_circleG" id="frotateG_07"></span>
																<span className="f_circleG" id="frotateG_08"></span>
															</span>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="geo-location-ref-window" data-disabled="Y">
										<div className="geo-location-ref-window-city-container">
											<div className="geo-location-ref-window-city-label">Сейчас выбран:</div>
											<div className="geo-location-ref-window-city-value"></div>
											<div className="get-location-ref-window-confirm"><a href="#"
													className="get-location-ref-window-confirm-button btn-simple btn-small">Подтверждаю</a>
											</div>
											<div className="get-location-ref-window-change"><a href="#"
													className="get-location-ref-window-change-button theme-link-dashed">Изменить</a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="headerLineColumn headerLineMenu">
						<ul id="subMenu">
							<li><a href="/about/">О компании</a></li>
							<li><a href="/stock/">Акции</a></li>
							<li><a href="/about/delivery/">Доставка и оплата</a></li>
							<li><a href="/about/contacts/">Контакты</a></li>
						</ul>
					</div>
					<div className="headerLineColumn">
						
						
					</div>
				</div>
			</div>
		</div>
		<div id="subHeader5">
			<div className="limiter">
				<div className="subTable">
					<div className="subTableColumn">
						<div id="logo">
							<img alt="Копировальный центр в Москве"
								src="/local/templates/dresscode/images/logo.png?v=1626288927?v="></img>
						</div>
					</div>
					<div className="subTableColumn">
						<span className="heading"><a href='tel:+79093802519'>+7(909) 380-25-19</a></span>
							
						
					</div>
					<div className="subTableColumn">
						<span className="label"><a
								href='mailto: zakaz.opechatka@list.ru'>zakaz.opechatka@list.ru</a></span><span
							className="label">Заревый пр., 12</span>
					</div>
					<div className="subTableColumn">
						
					</div>
					<div className="subTableColumn">
					
					</div>
				</div>
			</div>
		</div>
</>
    );

    
};

export default Header;