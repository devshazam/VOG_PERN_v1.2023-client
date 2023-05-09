import React from 'react';


function Footer(){
    return (<>
     <footer><div className="container">
        <div className="footer-top-cms">
            <div className="footer-logo"> <a href="#"><img alt="index.html" src="image/logo-footer.png" style={{width: 140}} /></a> 
            <a href="https://github.com/woskresk">Разработка сайта</a>
            </div>
            <div className="footer-desc"> <span>Доска скидок Колпино — это самые горячие скидки от Ваших любимых магазинов, расположенных в Колпино, теперь не надо искать скидки, они идут к Вам сами!</span> </div>
            <div className="footer-social">
                <h5>Social</h5>
                <ul>
                    <li className="facebook"><a href="#"><i className="fa fa-vk"></i></a></li>
                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="gplus"><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                    
                </ul>
            </div>
        </div>
        
    </div>


    <a id="scrollup">Scroll</a> 
    </footer>
    </>
        
    );
};

export default Footer;