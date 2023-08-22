import React, { useContext } from "react";
import { Context } from "./index";
import { Outlet, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderAbove from "./components/HeaderAbove";
import ReviewPage from "./components/modal/ReviewPage";
import ChangeUserCred from "./components/modal/ChangeUserCred";

const LayoutAdmin = () => {
    const { user } = useContext(Context);

    return (
        <>
            <HeaderAbove />
            <Header />
            <Container className="main-cont">
                {user.isAuth ? <Outlet /> : <Navigate to="/" />}
            </Container>
            <Footer />
            <ReviewPage />
            <ChangeUserCred />
        </>
    );
};

export default LayoutAdmin;

