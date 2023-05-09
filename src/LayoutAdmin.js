import React, { useContext } from 'react';
import {Context} from "./index";
import { Outlet, Navigate } from "react-router-dom";



import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteBar from "./components/SiteBar";

const LayoutAdmin = () => {

    const {user} = useContext(Context)



    return (
        <div>
        <Header />
        <div className="container ">
        <div className="row">
        <SiteBar />
        {user.isAuth ? <Outlet /> : <Navigate to='/' />}
        </div>
        </div>
        <Footer />
        </div>
    );
};

export default LayoutAdmin;