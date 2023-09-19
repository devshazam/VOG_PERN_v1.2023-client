import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import HeaderAbove from "./components/HeaderAbove";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import LoginPage from "./components/modal/LoginPage";
import RegPage from "./components/modal/RegPage";
import ReviewPage from "./components/modal/ReviewPage";
import ChangeUserCred from "./components/modal/ChangeUserCred";
import BanForSite from "./components/modal/BanForSite";

export default function Layout() {
    return (
        <>
            <HeaderAbove />

            <Header />
            <Container className="main-cont">
                <Outlet />
            </Container>
            <Footer />
            <LoginPage />
            <RegPage />
            <ReviewPage />
            <ChangeUserCred />
            <BanForSite />
        </>
    );
}
