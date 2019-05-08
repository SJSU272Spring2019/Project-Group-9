import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import Pagination from '../Navigation/Pagination';
import Header from '../Navigation/Header';
import VideoCard from '../Body/Cards/VideoCard';
import LoginSidebar from '../Body/LoginSidebar';

class VideoDisplay extends Component {
    constructor(props){
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
      let videos = require('../../video.json');
      return videos;
    }

    componentWillMount=()=>{
      const videos = this.importAll();
      const values= Object.values(videos);
      this.setState({rows:values})
    }

    render() {
      const { rows, currentrows, currentPage, totalPages } = this.state;
      const totalrows = rows.length;
      let nav=null;
      if(this.state.goto===true)
      nav=<Redirect to= "/login"/>
      if (totalrows === 0) return null;
      return (
        <div>
        <Header />
        <br />
          {nav}
          <Container fluid>
            <Row>
              <Col sm={12} md={9} lg={9}>
              <Jumbotron>
                <div id="page">
                      { currentPage && (
                         <div></div>
                        ) }
                        <Pagination totalRecords={totalrows} pageLimit={8} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                </div>
                <Row>
                {currentrows.map( (member) => {
                  return (<VideoCard title={member["title"]} src={member["src"]}/>)
                }) }
                </Row>
              </Jumbotron>
              </Col>
              <Col sm={12} md={3} lg={3} >
                <LoginSidebar />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}

export default VideoDisplay;
