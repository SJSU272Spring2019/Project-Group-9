import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import '../../Styles/Pagination.css'
import Header from '../Navigation/Header';
import Pagination from '../Navigation/Pagination';
import ProductCard from '../Body/Cards/ProductCard';
import LoginSidebar from '../Body/LoginSidebar';

class ProductDisplay extends Component {
  constructor(props){
    super(props);
    super(props);
    this.state = {
      rows:[],
      memberid:"",
      refreshListings: false,
      currentrows: [],
       currentPage: null,
        totalPages: null ,
        goto:false
    }

    }
    login=(e)=>{
      this.setState({goto:true})
    }
    onPageChanged = data => {
      const { rows } = this.state;
      const { currentPage, totalPages, pageLimit } = data;

      const offset = (currentPage - 1) * pageLimit;
      const currentrows = rows.slice(offset, offset + pageLimit);

      this.setState({ currentPage, currentrows, totalPages });
    }
  importAll=(r)=> {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  componentWillMount=()=>{
    const images = this.importAll(require.context('../../products', false, /\.(png|jpe?g|svg)$/));
    const values= Object.values(images);
    console.log("names are",values)
    this.setState({rows:values})
  }
  render() {

    const { rows, currentrows, currentPage, totalPages } = this.state;
    const totalrows = rows.length;
    let nav=null;
    {//if(this.state.goto===true)
      //nav=<Redirect to= "/login"/>
    }
    if (totalrows === 0) return null;
    return (
      <div>
        <Header />
      <br />
        {nav}
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={9}>
            <Jumbotron>
            <div id="page">
                  { currentPage && (
                     <div></div>
                    ) }
                    <Pagination totalRecords={totalrows} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
              {currentrows.map(member=><ProductCard src={member} name="Product Card" />)}
            </Jumbotron>
            </Col>
            <Col sm ={12} md={12} lg={3} >
              <LoginSidebar />
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductDisplay;
