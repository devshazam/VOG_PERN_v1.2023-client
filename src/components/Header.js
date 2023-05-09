import React, { useContext } from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/esm/Container';

import Nav from 'react-bootstrap/Nav';
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Header = observer(() => { 
  const navigate = useNavigate();

    const {helpers, user} = useContext(Context)

    const showModalLogin = () => {
        helpers.setModalLogin(true);
    }
    const showModalRegistration = () => {
        helpers.setModalRegistration(true);
    }
    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
        
        localStorage.removeItem('token');
        
        navigate("/");
    }
 

    return (
        <Container>
                <Nav
            >
                          {user.isAuth  ? 
                          <><Nav.Item>
                          <Nav.Link onClick={logOut} >Выход</Nav.Link>
                          </Nav.Item>

                          <Nav.Item>
                            <Nav.Link href="/admin/" >Мои объявления</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link href="/admin/add-product/" >Создать объявление</Nav.Link>
                            </Nav.Item>
                          </>
                            :
                          <>
                          <Nav.Item>
                            <Nav.Link onClick={showModalLogin} >Вход</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link onClick={showModalRegistration} >Регистрация</Nav.Link>
                            </Nav.Item>
                            </> }
            </Nav>
      </Container>
    );

    
});

export default Header;