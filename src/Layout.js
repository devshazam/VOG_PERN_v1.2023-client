import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import HeaderAbove from "./components/HeaderAbove";


import Footer from "./components/Footer";

import SiteBar from "./components/SiteBar";
import LoginPage from './components/modal/LoginPage';
import RegPage from './components/modal/RegPage';


export default function  Layout(){

    return ( <>

<HeaderAbove />
            <div id="panel">
	</div>
	<div id="foundation">
            <Header />

            <div id="main" className="color_white">
			<div className="limiter">
				<div className="compliter">

        <SiteBar />
                    <Outlet />

        </div>
			</div>
		</div>
    <Footer />
    </div>
    <div id="overlap"></div>
    <LoginPage />
              <RegPage />


    </>);
}