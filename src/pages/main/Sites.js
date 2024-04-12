import React from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";

export default function Sites() {
    return (
        <>
            <Container>
               <h1>Разработка сайтов - <a href="https://docs.google.com/spreadsheets/d/15-S6nuAZmFIOgbWYCZMc2RgTPA7dvPy9/edit?usp=sharing&ouid=117443855612121402557&rtpof=true&sd=true">прайс-лист!</a> </h1>
               
                <Row className="mb-5">
                    <Col xs={12} sm={6} lg={4} className="mb-3">
                        <a href="https://rus1transfer.ru/" target="blank">
                            <Image
                                src="/file/transfer.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    
                    <Col xs={12} sm={6} lg={4} className="mb-3">
                        <a href="https://butik-hotel1i3.ru/" target="blank">
                            <Image
                                src="/file/onetree.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    <Col xs={12} sm={6} lg={4} className="mb-3">
                        <a href="https://davse.ru/" target="blank">
                            <Image
                                src="/file/map.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col>
                    {/* <Col xs={12} sm={6} lg={3} className="mb-3">
                        <a href="/3d-details">
                            <Image
                                src="/file/home/3d.jpg"
                                thumbnail
                                className="img-mob"
                            />
                        </a>
                    </Col> */}
                </Row>

            </Container>
        </>
    );
}
