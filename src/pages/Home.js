import {useState, useEffect} from 'react';
import { fetchHomeDevices } from '../http/deviceAPI'
import Spinner from 'react-bootstrap/Spinner';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function  Home(){
        const [goods, setGoods] = useState();

    useEffect(() => {
        fetchHomeDevices().then(data => setGoods(data)).catch(e => console.log(e.message));
    //  if(goods) console.log(goods);
    }, [])

if(!goods) return <Spinner animation="border" className='mt-5 ml-5' />


    return ( <>
         <div id="content" className="col-sm-9">
         <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Новые">
                    <Container fluid>
                        <Row>
                            {goods.created.map((prop, index) => {
                            return  <Col key={index} md={3}>
                                        <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={`http://localhost:5000/${prop.img}`} />
                                        <Card.Body>
                                            <Card.Title>{prop.name}</Card.Title>
                                            <Card.Text>
                                            {prop.sale}
                                            </Card.Text>
                                            <Button variant="primary" href={`/product/${prop.id}`}>Go somewhere</Button>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                            })}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="profile" title="Дешевле">
                <Container fluid>
                        <Row>
                {goods.price.map((prop, index) => {
                    return  <Col key={index} md={4}>
                        <Card  >
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{prop.name}</Card.Title>
                                <Card.Text>
                                {prop.sale + prop.img}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                      </Col>    
                        })}
                         </Row>
                    </Container>
                </Tab>
                <Tab eventKey="contact" title="Скидка" >
                <Container fluid>
                        <Row>
                    {goods.sale.map((prop, index) => {
                    return  <Col key={index} md={4}>
                            <Card  >
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{prop.name}</Card.Title>
                                <Card.Text>
                                {prop.sale + prop.img}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        })}
                         </Row>
                    </Container>
                </Tab>
        </Tabs>

        </div>
    </>); 
}