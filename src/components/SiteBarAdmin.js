import React from 'react';


    const SiteBar = () => { 

    return ( <>
            <div id="left">
						<a href="#" className="heading orange " id="catalogMenuHeading">Каталог
							товаров<ins></ins></a>
						<div className="collapsed">
							<ul id="leftMenu">
								 <li className="eChild allow-dropdown nested">
									<a href="/vizitki" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/file/pic/icons8-card-100.png"
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
								<li  className="eChild allow-dropdown nested">
									<a href="/banner" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/file/pic/icons8-card-100.png"
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
								<li className="eChild allow-dropdown nested">
									<a href="/samokley" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/file/pic/icons8-card-100.png"
													alt="Срочная полиграфия" title="Срочная полиграфия"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Самоклейки</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								<li className="eChild allow-dropdown nested">
									<a href="/pechat-na-holste" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/file/pic/icons8-card-100.png"
													alt="Срочная полиграфия" title="Срочная полиграфия"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Печать на холсте</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								<li className="eChild allow-dropdown nested">
									<a href="/tverdy-pereplet" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/file/pic/icons8-card-100.png"
													alt="Срочная полиграфия" title="Срочная полиграфия"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Твердый переплет дипломов</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li>
								{/* <li className="eChild allow-dropdown nested">
									<a href="/struinay-pechat" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/file/pic/icons8-card-100.png"
													alt="Срочная полиграфия" title="Срочная полиграфия"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Струйная печать</span>
												<span className="dropdown btn-simple btn-micro"></span>
											</span>
										</span>
									</a>
								</li> */}







								<li className="eChild allow-dropdown nested">
									<a href="/razrabotka-saitov" className="menuLink">
										<span className="tb">
											<span className="pc">
												<img src="/file/pic/icons8-card-100.png"
													alt="Срочная полиграфия" title="Срочная полиграфия"></img>
												<span className="back"></span>
											</span>
											<span className="tx">
												<span className="link-title">Разработка сайтов</span>
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

