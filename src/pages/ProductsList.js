import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { fetchOffsetDevices } from '../http/deviceAPI'
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
import Pagination from 'react-bootstrap/Pagination';


const ProductsList = () => {

  const {category, page } = useParams();
  const [goods, setGoods] = useState();
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    fetchOffsetDevices(category, page).then(data => {
      setGoods(data.rows)
      setCounts(data.count)
    }
      ).catch(e => console.log(e.message));
  //  if(goods) console.log(goods);
  }, [])



let active = page;
let items = [];
for (let number = 1; number <= Math.ceil(counts/8); number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
  </div>
);


if(!goods){ return <Spinner animation="border" className='mt-5 ml-5' />}

            return (
              <>
              <div id="content" className="col-sm-9">
                  <Container fluid>
                              <Row>
                                  {goods.map((prop, index) => {
                                  return  <Col key={index} md={3}>
                                              <Card style={{ width: '100%' }}>
                                              <Card.Img variant="top" src={`http://localhost:5000/${prop.img}`} />
                                              <Card.Body>
                                                  <Card.Title>{prop.name}</Card.Title>
                                                  <Card.Text>
                                                  {prop.sale}
                                                  </Card.Text>
                                                  <Button variant="primary" >Посмотреть</Button>
                                              </Card.Body>
                                              </Card>
                                          </Col>
                                  })}
                              </Row>
                          </Container>
                          {paginationBasic}
              
                          </div>
              </>
          );
};

export default ProductsList;