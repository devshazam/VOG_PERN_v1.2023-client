import React, { useContext, useEffect, useState } from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';

import Nav from 'react-bootstrap/Nav';
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { reciveBasketCount } from "../http/deviceAPI";

const Header = observer(() => { 
  const [basketNumber, setBasketNumber] = useState('0');
  const navigate = useNavigate();
  const {helpers, user} = useContext(Context)
    useEffect(() => {
      reciveBasketCount(user.user.id).then((res) => {
          console.log(res)
          setBasketNumber(res)
      }).catch((error) => { 
            console.log(error.response.data.message);
        });
      }, [])

    
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
                            title={user.user.email}
                            // menuVariant="dark"
                          >
                            <NavDropdown.Item href="/admin/bar">История заказов</NavDropdown.Item>
                            {user.user.role == 'USER' && 
                              <NavDropdown.Item onClick={showModalReview} >Оставить отзыв</NavDropdown.Item>
                            }
                            <NavDropdown.Item onClick={logOut} >Выход</NavDropdown.Item>
                            {user.user.role == 'ADMIN' && 
                              <>
                              <NavDropdown.Divider />
                                <NavDropdown.Item href="/admin">Список заказов</NavDropdown.Item>
                                <NavDropdown.Item href="/admin/create">Создать товар</NavDropdown.Item>
                                {/* <NavDropdown.Item href="/admin">Вставить товар</NavDropdown.Item> */}
                              </>
                            }
                          </NavDropdown>
                          <Nav.Item>
                            <Nav.Link href="/admin/user-basket" >
                              <Image src="/file/icons8-basket-50.png" className="bascket_img" rounded />
                              <span className="bascket-num">{basketNumber}</span>
                              </Nav.Link>
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
                      </> 
                      }
              </Nav>
            </Col>
            </Row>
      </Container>
    );

    
});

export default Header;