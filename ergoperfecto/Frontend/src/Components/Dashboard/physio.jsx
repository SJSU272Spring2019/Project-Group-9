import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Row, Col, Form, Button, Table, Modal,Container, ListGroup} from 'react-bootstrap';
import '../../Styles/Dashboard.css';
import API from '../../api/API'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';


class Physio extends Component {
    constructor(props) {
      super(props);
      this.state = {

        list: ["ACL Reconstruction – Protocol for Physiotherapy Following Surgery",
            "Calf Stretch with Belt (knee straight)",
            "Knee Extension Over a Roll",
           " Knee Extension – Self Mobilization",
            "Knee Flexion Self-Mobilization",
            "Knee Slides with Belt",
            "Lunge Walking",
            "Straight Leg Raise",
            "Quadriceps Activation",
            "Ankle Dorsiflexion Self Mobilization",
"Ankle Plantarflexion Self Mobilization",
"Minor Rotator cuff Repair – Protocol for Physiotherapy Following Surgery",
"Major Rotator Cuff Repair – Protocol for Physiotherapy Following Surgery",
"Arthroscopic Shoulder Surgery – Anterior Stabilization – Protocol For Physiotherapy Following Surgery",
"Shoulder Pendulum",
"Shoulder Table Glides",
"Cat Cow Back Stretches",

          ]
      };
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
    }

    addItem(e) {
      // Prevent button click from submitting form
      e.preventDefault();

      // Create variables for our list, the item to add, and our form
      let list = this.state.list;
      const newItem = document.getElementById("addInput");
      const form = document.getElementById("addItemForm");

      // If our input has a value
      if (newItem.value != "") {
        // Add the new item to the end of our list array
        list.push(newItem.value);
        // Then we use that to set the state for list
        this.setState({
          list: list
        });
        // Finally, we need to reset the form
        newItem.classList.remove("is-danger");
        form.reset();
      } else {
        // If the input doesn't have a value, make the border red since it's required
        newItem.classList.add("is-danger");
      }
    }

    removeItem(item) {
      // Put our list into an array
      const list = this.state.list.slice();
      // Check to see if item passed in matches item in array
      list.some((el, i) => {
        if (el === item) {
          // If item matches, remove it from array
          list.splice(i, 1);
          return true;
        }
      });
      // Set state to list
      this.setState({
        list: list
      });
    }

    render() {
      return (
        <div >
          <Row>
            <Col md={10} lg={10}>
            <Form.Control
                  type="text"
                  className="input"
                  id="addInput"
                  placeholder="Something that needs to be done..."
                />
              </Col>
              <br /><br />
              <Col md={2} lg={2}>
                <Button  onClick={this.addItem}>
                  Add Item
                </Button>
              </Col>
                <List items={this.state.list} delete={this.removeItem} />
            </Row>
            <section className="section">
              <form className="form" id="addItemForm">

              </form>
            </section>
        </div>
      );
    }
  }

  class List extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              filtered: [],
              addedlist:[],
          };
          this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {

        this.setState({
          filtered: this.props.items
        });
        var data={
          username:localStorage.getItem("user_email")
        }
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        const url = API.baseURL + API.exercises
        axios.post("http://localhost:3001/getexercises",data)
                .then(response => {


          console.log("Status Code : ",response.status);
          if(response.status === 200){


              let d = response.data
              if(response.data.result[0]!=null)
               this.setState({
                   addedlist : d.result[0].exercises
               })
               console.log(this.state.addedlist,"listed")
          }
        })
        .catch()
     }

      componentWillReceiveProps(nextProps) {
        this.setState({
          filtered: nextProps.items
        });

      }

      handleChange(e) {
              // Variable to hold the original version of the list
          let currentList = [];
              // Variable to hold the filtered list before putting into state
          let newList = [];

              // If the search bar isn't empty
          if (e.target.value !== "") {
                  // Assign the original list to currentList
            currentList = this.props.items;

                  // Use .filter() to determine which items should be displayed
                  // based on the search terms
            newList = currentList.filter(item => {
                      // change current item to lowercase
              const lc = item.toLowerCase();
                      // change search term to lowercase
              const filter = e.target.value.toLowerCase();
                      // check to see if the current list item includes the search term
                      // If it does, it will be added to newList. Using lowercase eliminates
                      // issues with capitalization in search terms and search content
              return lc.includes(filter);
            });
          } else {
                  // If the search bar is empty, set newList to original task list
            newList = this.props.items;
          }
              // Set the filtered state based on what our rules added to newList
          this.setState({
            filtered: newList
          });
      }

      addtolist=(x)=>{
        var newArray = this.state.addedlist.slice();
        newArray.push(x);
        console.log(newArray)
        this.setState({addedlist:newArray})
        var data={
          username:localStorage.getItem("user_email"),
          exercise:x
        }
        axios.defaults.withCredentials = true;
            console.log("posting")
        axios.post("http://localhost:3001/exercises",data)
        .then(response => {
         console.log(response.data,"errr")
        }).catch(err=>
          console.log(err)
          )
      }

      removefromlist=(x)=>{
        var newArray = this.state.addedlist.slice();
        newArray.pop(x);
        newArray.splice( newArray.indexOf(x), -1 );
        console.log(newArray)
        this.setState({addedlist:newArray})
        var data={
          username:localStorage.getItem("user_email"),
          exercise:x
        }
        axios.defaults.withCredentials = true;
        //make a post request with the user data

        axios.post("http://localhost:3001/deleteExercises",data)
      }

      doRegex=(item)=> {
        return ("" + item).replace(/ +/g)
      }

      render() {
          return (
            <Container fluid>
            <Row>
              <Col sm={12} md={10} lg={6}>
                <div >
                      <Table  striped bordered hover size="md">
                        <thead>
                          <tr>
                            <th>Exercise</th>
                            <th>Add Favorite</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Form.Control type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                            </td>
                            <td></td>
                          </tr>
                          {this.state.filtered.map(item => (
                            <tr>
                              <td>
                                <Link to={"/singleitem/" + item.replace(/ +/g, "")}>
                                  <strong>{item}</strong>
                                  </Link>
                              </td>
                              <td>
                                  <span onClick={()=>this.addtolist(item)}> <FontAwesomeIcon icon="star" style={{color: '#fcdc06'}} /></span>
                              </td>
                            </tr>
                          ))
                          }
                          </tbody>
                      </Table>
                </div>
              </Col>
              <Col sm={26} md={10} lg={6}>
                <div>
                  <h4>Favorites</h4>
                    <ListGroup defaultActiveKey="#link1">
                     {this.state.addedlist.map (item=>
                          <ListGroup.Item>
                            <Row>
                              <Col md={1} lg={1}>
                                <span onClick={()=>this.removefromlist(item)}> <FontAwesomeIcon icon="minus" style={{color: '#af3838'}} /></span>
                              </Col>
                              <Col md={11} lg={11}>
                                <Link to={"/singleitem/" + item.replace(/ +/g, "")}>
                     <strong>{item}</strong>
                                </Link>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                      )}
                  </ListGroup>
                  {console.log(this.state.addedlist)}
                </div>
              </Col>
            </Row>
          </Container>

          )
      }
  }

  export default Physio;
