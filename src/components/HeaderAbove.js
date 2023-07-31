import React, { useContext } from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/esm/Container';

import Nav from 'react-bootstrap/Nav';
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    const showModalReview = () => {
      helpers.setModalReview(true);
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
          <Row>
            <Col xs={12} lg={4}>
            </Col>
            <Col xs={12} lg={{ span: 4, offset: 4 }}>
              <Nav style={{justifyContent:'right', position: 'relative', zIndex: 1021}}>
                    {user.isAuth  ? 
                        <>
                        
                          <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Личный кабинет"
                            // menuVariant="dark"
                          >
                            <NavDropdown.Item href="/admin/bar">История заказов</NavDropdown.Item>
                            <NavDropdown.Item onClick={showModalReview} >Оставить отзыв</NavDropdown.Item>
                            <NavDropdown.Item onClick={logOut} >Выход</NavDropdown.Item>
                            {user.user.role == 'ADMIN' && 
                              <>
                              <NavDropdown.Divider />
                                <NavDropdown.Item href="/admin">Список заказов</NavDropdown.Item>
                                {/* <NavDropdown.Item href="/admin">Список товаров</NavDropdown.Item>
                                <NavDropdown.Item href="/admin">Вставить товар</NavDropdown.Item> */}
                              </>
                            }
                          </NavDropdown>
                        </>
                      :
                      <>
                        <Nav.Item>
                          <Nav.Link onClick={showModalLogin} >Вход</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link onClick={showModalRegistration} >Регистрация</Nav.Link>
                        </Nav.Item>
                      </> 
                      }
              </Nav>
            </Col>
            </Row>
      </Container>
    );

    
});

export default Header;