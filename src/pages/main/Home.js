import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export default function Home() {

    const [show, setShow] = useState(false);
    const [src, setSrc] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShows = (q) => {
        setSrc(q);
        setShow(true);
    };
    return (
        <>
            {/* <Container> */}
            <div className="mb-5">
                <Carousel
                    data-bs-theme="dark"
                    // className="mb-5 d-none d-sm-block"
                >
                    <Carousel.Item>
                        <a href="/produce/vizitki">
                            <img
                                className="d-block w-100 rounded"
                                src="/file/main-banner/banner-1.jpg"
                                alt="Second slide"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3 className="d-group"><mark style={{ backgroundColor: "white", color: "black" }}>Полиграфия в Волгограде!</mark></h3>
                            <p className="d-group"><mark style={{ backgroundColor: "white", color: "black" }}>Весь спектр полиграфических услуг по низким ценам!<br></br>Приходите и попробуйте сами.</mark></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <a href="/3d-details">
                        <img
                            className="d-block w-100 rounded"
                            src="/file/main-banner/banner-2.jpg"
                            alt="First slide"
                        /></a>
                        <Carousel.Caption style={{ color: "white" }}>
                            <h3 className="d-group"><mark style={{ backgroundColor: "black", color: "white" }}>3D печать в Волгограде!</mark></h3>
                            <p className="d-group"> <mark style={{ backgroundColor: "black", color: "white" }}>На 3D принтере можно напечататьлюбую деталь, даже самую сложную!<br></br>Приходите и попробуйте!</mark></p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                </div>



            <div id="fast-choice">
                <h3 className="mb-3" style={{ borderBottom: "6px solid #63b03e", display: "inline-block" }}>Популярные услуги</h3>
                <Row className="mb-5">
                    <Col xs={6} lg={2} >
                        <a href="/produce/banner">
                            <Image
                                src="/file/home/banner.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    
                    <Col xs={6} lg={2}  className="mb-3" >
                        <a href="/produce/samokleyka">
                            <Image
                                src="/file/home/samokleyky.png"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <a href="/3d-details">
                            <Image
                                src="/file/home/3d.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <a href="/produce/vizitki">
                            <Image
                                src="/file/home/vizitki.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <a href="/produce/holsty">
                            <Image
                                src="/file/holst.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <a href="/produce/znachki">
                            <Image
                                src="/file/znachki/1.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                </Row>
                </div>
               
            <div id="feedback">
                <h3 className="mb-3" style={{ borderBottom: "6px solid #63b03e", display: "inline-block" }}>Отзывы</h3>
                <Row className="mb-5">
                    <Col xs={6} lg={3}  className="mb-3" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Александра Т.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">02.08.2022</Card.Subtitle>
                            <Card.Text>
                            Спасибо большое ребятам за быстрое обслуживание, нам  срочно нужно было фото для загран паспорта!
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} lg={3}  className="mb-3" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Кочерян Э.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">17.01.2024</Card.Subtitle>
                            <Card.Text>
                            Сделали шестерню для мясорубки на 3D принтере, сэкономили мне время, деньги и нервы. Спасибо большое!
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} lg={3}  className="mb-3" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Васнецова А.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">26.05.2024</Card.Subtitle>
                            <Card.Text>
                            Помогли распечатать чертежи для перепланировки в квартире. 100 штук.
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} lg={3}  className="mb-3" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Гусев П.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">09.03.2023</Card.Subtitle>
                            <Card.Text>
                                Сделали визитки и макет к ним, мне все понравилось! Визитки с небольшими дефектами перепечатали. Хороший сервис!
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} lg={3}  className="mb-3 d-group" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Павел К.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">13.04.2024</Card.Subtitle>
                            <Card.Text>
                            Распечатали программу для медицинского учреждения. Спасибо большое!
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} lg={3}  className="mb-3 d-group" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Ирина С.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">11.06.2024</Card.Subtitle>
                            <Card.Text>
                            Сделали прелестные футболки с надписями на всю танцевальную группу с логотипами и именами участников. Класс, спасибо!
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} lg={3}  className="mb-3 d-group" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Эдуард Л.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">21.05.2024</Card.Subtitle>
                            <Card.Text>
                            Распечатали 10 баннеров в срок и без ошибок, в других полиграфиях намного дороже, да еще и ошибки часто делают!
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} lg={3} className="mb-3 d-group"  >
                    <Card>
                        <Card.Body>
                            <Card.Title>Павел Т.</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">03.06.2024</Card.Subtitle>
                            <Card.Text>
                                Сделали визитки и макет к ним, мне все понравилось! Визитки с небольшими дефектами перепечатали. Хороший сервис!
                            </Card.Text>
                            <Card.Text>
                            5.0 ⭐⭐⭐⭐⭐
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
 
                </Row>

            </div>


            <div id="portfolio">
                <h3 className="mb-3" style={{ borderBottom: "6px solid #63b03e", display: "inline-block" }}>Портфолио</h3>
                <Row className="mb-5">
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/1.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/1.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/2.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/2.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/3.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/3.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/4.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/4.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/5.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/5.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/6.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/6.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/7.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/7.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/8.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/8.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/9.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/9.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/10.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/10.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/11.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/11.jpg")}
                        />
                    </Col>
                    <Col xs={6} lg={2} className="mb-3" >
                        <Image
                            src="/file/portfolio/12.jpg"
                            thumbnail
                            className="img-mob"
                            onClick={() => handleShows("/file/portfolio/12.jpg")}
                        />
                    </Col>
                    
                </Row>

            </div>

            <div id="contacts">
                <h3 className="mb-3" style={{ borderBottom: "6px solid #63b03e", display: "inline-block" }}>Контакты</h3>
           
                 {/* TODO - карта яндекс */}
                 <div className="contacts__map rounded" id="map" style={{ overflow: "hidden"}}>
                  <iframe id="iframe-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A060b3485f21dfcc0665d3b1ab5142c50b7785234b63ae9fc37474239f0203294&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
                </div>
            </div>




            <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        <Image
                                src={src}
                                thumbnail
                                className="img-mob"
                            />
      </Modal>

        </>
    );
}


