import React from 'react';


    const SiteBar = () => { 

    return ( <>
            <div id="left">
						<a href="#" className="heading orange disabled" id="catalogMenuHeading">Каталог
							товаров<ins></ins></a>
						<div className="collapsed">
							<ul id="leftMenu">
								 <li className="eChild allow-dropdown nested">
									<a href="/vizitki" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/upload/iblock/dfa/dfab5316825d01f70a61ea2696f327c1.png"
													alt="Полиграфия" title="Полиграфия"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Визитки</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								<li  key={3} className="eChild allow-dropdown nested">
									<a href="/catalog/pereplet-dokumentov/" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/upload/iblock/349/a374a8cwdkxpy91qi23gchkj9q5s9v0g.png"
													alt="Переплет документов" title="Переплет документов"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Баннеры</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								
								</li>
								<li key={2} className="eChild allow-dropdown nested">
									<a href="/catalog/srochnaya-poligrafiya/" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/upload/iblock/2c2/2c283c717caf0f4a7e27d3564f9e520a.png"
													alt="Срочная полиграфия" title="Срочная полиграфия"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Листовки</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								<li className="eChild allow-dropdown nested">
									<a href="/catalog/lazernaya-gravirovka/" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/upload/iblock/ef0/ef0ccfe117b9ee78115f5c7d84e0e5d5.png"
													alt="Услуги лазерной гравировки ."
													title="Услуги лазерной гравировки ."></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Услуги лазерной гравировки .</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								<li className="eChild allow-dropdown nested">
									<a href="/catalog/fotouslugi/" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/upload/iblock/725/7252bce85f7ea158b9571764d8162fb6.png"
													alt="Фотоуслуги" title="Фотоуслуги"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Фотоуслуги</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								<li className="eChild allow-dropdown nested">
									<a href="/catalog/pechati-i-shtampy/" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/upload/iblock/931/93178240c622e43e72cb9a2a974765ee.png"
													alt="Печати и штампы" title="Печати и штампы"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Печати и штампы</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								<li className="eChild allow-dropdown nested">
									<a href="/catalog/podarki-s-vashim-foto/" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/upload/iblock/781/7813ef76aa04d4e159f6095a9f7df3cb.png"
													alt="Подарки с вашим фото" title="Подарки с вашим фото"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Подарки с вашим фото</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
							</ul>
						</div>

					</div>
    </>);
};

export default SiteBar;