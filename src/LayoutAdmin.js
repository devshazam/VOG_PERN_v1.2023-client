import React, { useContext } from 'react';
import {Context} from "./index";
import { Outlet, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Header from "./components/Header";
import Footer from "./components/Footer";

import SiteBarAdmin from "./components/SiteBarAdmin";

import HeaderAbove from "./components/HeaderAbove";

const LayoutAdmin = () => {

    const {user} = useContext(Context)



    return ( <>

<HeaderAbove />
        <div id="panel">
</div>
<div id="foundation">
        <Header />

        <div id="main" className="color_white">
        <div className="limiter">
            <div className="compliter">

    {/* <SiteBarAdmin />     */}
    {user.isAuth ? <Outlet /> : <Navigate to='/' />}

    </div>
        </div>
    </div>
<Footer />
</div>




<Header />
          <Container>
            
    {/* <SiteBarAdmin />     */}
    {user.isAuth ? <Outlet /> : <Navigate to='/' />}
            
          </Container>
          <Footer />
          {/* <LoginPage />
          <RegPage /> */}


</>);
};



export default LayoutAdmin;





