import React, { useContext } from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/esm/Container';

import Nav from 'react-bootstrap/Nav';
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Header = observer(() => { 
  const navigate = useNavigate();

    const {helpers, user} = useContext(Context)
    // console.log(user.user.phone)
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
  // console.log(user.user.role)
 

    return (
        <Container>
                <Nav
            >
                          {user.isAuth  ? 
                          <><Nav.Item>
                          <Nav.Link onClick={logOut} >Выход</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link  href="/admin/bar">Личный кабинет</Nav.Link>
                          </Nav.Item>
                              {user.user.role == 'ADMIN' && 
                                <>
                                      <Nav.Item>
                                        <Nav.Link  href="/admin">Панель администратора</Nav.Link>
                                      </Nav.Item>
                                </>
                              }
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