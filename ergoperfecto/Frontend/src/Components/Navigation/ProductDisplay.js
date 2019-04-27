import React, { Component } from 'react';
import '../../Styles/Navigation.css';
import Pagination from './Pagination';
import '../../Styles/Header.css';
import {Redirect} from 'react-router';
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
      {nav}
    
      <div id="login-prompt">
      <img src={require('../Navigation/question.jpg')} width={210} height={250} mode='fit' />
      <br /><br />
      <div id="personal">Want personalised recommendations?</div>
      <br /><br />
      <button class="but" onClick={this.login}>Log Me In</button>
      </div>
      <br /><br />
      <br /><br />
      <div >
      {currentrows.map(member=><div id="container"><img src={member} width={150} height={200} mode='fit' /></div>)}
      <br /><br />
      <br /><br />
      <div id="page">
            { currentPage && (
               <div>  
                </div>
              ) }
              <Pagination totalRecords={totalrows} pageLimit={8} pageNeighbours={1} onPageChanged={this.onPageChanged} />
     </div>
      </div>
    
      </div>
    );
  }
}

export default ProductDisplay;
