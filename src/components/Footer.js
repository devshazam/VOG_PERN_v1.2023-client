import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return (
	
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
							<p className="heading">Разработка сайта</p>
							<a href="https://github.com/jacklee137/"><p>Разработчик</p></a>

						</div>
              </Col>
			  <Col xs={12} lg ={3}>
			  <div className="column">
							<p className="heading">Адреса:</p>
							<p className="hr">1) ул. Петропавловская 87<br></br>2) Казахская 25 <br></br>График работы с 09:00 до 19:00</p>

						</div>		
              </Col>
			  <Col xs={12} lg ={3}>
			  <div className="column">
							<p className="heading">Контакты:</p>
							<a  href="mailto:<a href='mailto: info@kopi34.ru">Email: info@kopi34.ru</a><br></br>
							<a href='tel:89093802519'>+7(909) 380-25-19</a>
						</div>

              </Col>
			  
            </Row>
			<p >2023 © Копи-Принт - полиграфические услуги. Все права защищены.</p>
          </Container>

		  </footer>

        
    );
};

export default Footer;