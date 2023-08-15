import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Messanger from './Messanger';

function Footer(){
    return (
	<>
<footer>
		<Container>
            
            <Row>
              <Col xs={12} lg={3}>
			  <div className="column">
							<p className="heading">Договор оферта</p>
							<a href="/oferta"><p>Ссылка на документ</p></a>
						</div>
              </Col>
              <Col xs={12} lg ={3}>
			  <div className="column">
							<p className="heading"><a className="sjdkit" href="https://seo-cy.ru/">Разработка сайтов</a></p>
								<p>Делаем сайты по технологии @Jack_Lee</p>

						</div>
              </Col>
			  <Col xs={12} lg ={3}>
			  <div className="column">
							<p className="heading">Адреса в г.Волгоград:</p>
							<p className="hr">1) ул. Петропавловская 87<br></br>2) ул. Казахская 25 <br></br>График работы с 09:00 до 19:00</p>

						</div>		
              </Col>
			  <Col xs={12} lg ={3}>
			  <div className="column">
							<p className="heading">Контакты:</p>
							<p>Email: <a  href="mailto:<a href='mailto: info@kopi34.ru">kopi34@yandex.ru</a></p>
							<a href='tel:89093802519'>+7(909) 380-25-19</a><br></br>
							<a href='tel:+78442599161'>+7 (8442) 59-91-61</a>
							
						</div>

              </Col>
			  
            </Row>
			<p >2023 © Копи-Принт - полиграфические услуги. Все права защищены.</p>
          </Container>


		  </footer>
		  <Messanger />
	  </>

		  

        
    );
};

export default Footer;