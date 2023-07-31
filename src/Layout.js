import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import HeaderAbove from "./components/HeaderAbove";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Footer from "./components/Footer";

import SiteBar from "./components/SiteBar";
import LoginPage from './components/modal/LoginPage';
import RegPage from './components/modal/RegPage';
import ReviewPage from './components/modal/ReviewPage';

export default function  Layout(){

    return ( <>

<HeaderAbove />



      <Header />
          <Container>
            
            {/* <Row>
              <Col xs={0} md={3} className="d-none d-lg-block">
              <SiteBar />
              </Col>
              <Col xs={12} lg ={9}>
              <Outlet />
              </Col>
            </Row> */}
            <Outlet />
          </Container>
          <Footer />
          <LoginPage />
          <RegPage />
          <ReviewPage />

    </>);
}