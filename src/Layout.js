import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import SiteBar from "./components/SiteBar";
// import Preloader from './components/modal/Preloader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LoginPage from './components/modal/LoginPage';
import RegPage from './components/modal/RegPage';



export default function  Layout(){

    return ( <>
            {/* <Preloader /> */}
            <Header />
            <Container>
             
                <Banner />
                  <NavBar />
                  
                  <Row>
                    <SiteBar />
                    <Outlet />
                  </Row>
                  
                  
            </Container>
              <Footer />
              <LoginPage />
              <RegPage />

    </>);
}