import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SiteBar from "./components/SiteBar";



export default function  Layout(){

    return ( <>


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


<div id="upButton">
  <a href="#"></a>
</div>

    </>);
}