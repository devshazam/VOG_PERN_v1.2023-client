import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Offcanvas from 'react-bootstrap/Offcanvas';

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// import { useNavigate } from "react-router-dom";

const Header = () => { 

 

    return (
      <>

        <Navbar expand="lg" className="bg-body-tertiary mb-3" sticky="top">
          <Container >
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}

			<Navbar.Brand href="/">
            <img
              src="/file/logo.png"
              width="200"
              height="46"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              id="logo-file"
            />
			</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-between">
                <Nav className="justify-content-end  pe-3 my-2 my-lg-0">

                  <NavDropdown
                    title="Заказать"
                    id="offcanvasNavbarDropdown-expand-lg">
                    <NavDropdown.Item href="/vizitki">Визитки</NavDropdown.Item>
                    <NavDropdown.Item href="/banner">Баннеры</NavDropdown.Item>
                    <NavDropdown.Item href="/samokleyka">Самоклейки</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                  </NavDropdown>

                  <NavDropdown
                    title="Купить"
                    id="offcanvasNavbarDropdown-expand-lg">
                    <NavDropdown.Item href="/goods/futbolki">Футболки</NavDropdown.Item>
                    <NavDropdown.Item href="/goods/krujki">Кружки</NavDropdown.Item>
                    <NavDropdown.Item href="/goods/bagety">Багетные рамки</NavDropdown.Item>
                    <NavDropdown.Item href="/goods/suveniry">Сувенирная продукция</NavDropdown.Item>
                    <NavDropdown.Item href="/goods/planketki">Планкетки</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                  </NavDropdown>

                  <Nav.Link href="/contacts">Контакты</Nav.Link>
                </Nav>
				<Navbar.Text>
				<span className="label">
					г. Волгоград, ул. Петропавловская 87
					</span>
				</Navbar.Text>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>

          
        </Navbar>



</>
    );

    
};

export default Header;