import React from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";

export default function Home() {
    return (
        <>
            <Container>
                <Carousel
                    data-bs-theme="dark"
                    className="mb-5 d-none d-sm-block"
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/file/main-banner/banner-2.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
          <h3>Полиграфия в Волгограде!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/file/main-banner/banner-1.jpg"
                            alt="Second slide"
                        />
                        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>

                <Row className="mb-5">
                    <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href="/produce/banner">
                            <Image
                                src="/file/home/banner.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    
                    <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href="/produce/samokleyka">
                            <Image
                                src="/file/home/samokleyky.png"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href="/3d-details">
                            <Image
                                src="/file/home/3d.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href="/produce/vizitki">
                            <Image
                                src="/file/home/vizitki.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                </Row>

                <h2>Полиграфия в Волгограде</h2>

                <p>
                    Полиграфические услуги - это широкий спектр услуг, связанных
                    с производством и печатью различных материалов. Они
                    охватывают такие аспекты, как дизайн, верстка, печать и
                    отделка разнообразных продуктов. Эти услуги оказываются
                    полиграфическими компаниями, которые специализируются на
                    создании качественных и профессиональных печатных изданий.
                    <br></br>
                    Одной из основных услуг, предлагаемых полиграфическими
                    компаниями, является разработка дизайна и верстка различных
                    материалов. Это может включать в себя создание логотипов,
                    брошюр, листовок, каталогов, журналов и многого другого.
                    Опытные дизайнеры работают над созданием эстетически
                    привлекательных и эффективных макетов, учитывая требования и
                    предпочтения клиента.<br></br>
                    <br></br>
                    После разработки дизайна и верстки, полиграфическая компания
                    занимается печатью созданных материалов. Они используют
                    различные типы печати, включая офсетную печать, цифровую
                    печать, шелкографию и трафаретную печать. Каждый из этих
                    методов обладает своими преимуществами и применяется в
                    зависимости от требований проекта. Полиграфические услуги
                    позволяют получить высококачественную печать с яркими
                    цветами и четкими изображениями.
                    <br></br>
                    Кроме того, полиграфические компании обеспечивают отделку
                    продукции. Они предлагают различные варианты обработки,
                    такие как ламинация, тиснение, фольгирование, уф-лакирование
                    и другие. Эти методы отделки придают дополнительный
                    визуальный и тактильный эффект продуктам, делая их более
                    привлекательными и престижными.
                    <br></br>
                    Важным аспектом полиграфических услуг является соблюдение
                    высоких стандартов качества и точности. Полиграфические
                    компании работают с современным оборудованием и используют
                    качественные материалы для достижения наилучших результатов.
                    Они также имеют опытных специалистов, которые следят за всем
                    процессом производства, чтобы гарантировать, что
                </p>
            </Container>
        </>
    );
}
