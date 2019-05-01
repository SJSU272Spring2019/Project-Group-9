import React, { Component } from 'react';
import {Container, Pagination, Row, Col, Jumbotron} from 'react-bootstrap';
import LoginSidebar from './LoginSidebar';
import ProductCard from './ProductCard';

class Content extends Component {

  render() {
    let active = 2;
    let items = []
    for (let number = 1; number <= 10; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    const paginationBasic = (
      <div>
        <Pagination size="lg">{items}</Pagination>
        <br />
      </div>
    );

    return (
      <Container fluid>
      <Row>
        <Col md={9} lg={9}>
          <Jumbotron>
            <h3> Products </h3>
            <Row>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Row>
            <br />
            <Row>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Row>

            <br />
            <Row>
               <Col sm="12" md={{ size: 8, offset: 2 }}>
               {paginationBasic}
               </Col>
            </Row>
          </Jumbotron>
        </Col>
        <Col md={3} lg={3} >
          <LoginSidebar />
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Content;
