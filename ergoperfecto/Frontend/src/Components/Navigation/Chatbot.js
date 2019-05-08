import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import Header from './Header'
import ChatBot from 'react-simple-chatbot';
import './Home.css'


class Chatbot extends Component {
  constructor(props){
    super(props);

    this.state = {
      rows:[],

    }

    }
  render() {

    return (
      <div>
      <Header />
        <Container fluid>
          <div className="center">
            <ChatBot
              headerTitle="ErgoPerfectoRobot"
              speechSynthesis={{ enable: true, lang: 'en' }}
              steps={[
              {
                id: '1',
                message: 'What is your issue?',
                trigger: '2',
              },
              {
                        id: '2',
                        options: [
                          { value: '1', label: 'Need Help with Workstation', trigger: '3' },
                          { value: '2', label: 'Need Help with PhysioTherapy Forms', trigger: '5' },
                          { value: '3', label: 'Need Help with Exercise Setup', trigger: '4' },
                          { value: '4', label: 'Need Customized Reminders', trigger: '6' },
                          { value: '5', label: 'Need a personal physiotherapy session', trigger: '7' },
                        ],

                      },

              {
                id: '3',
                message: 'Could you please contact 911465211 to get it resolved!',
                trigger: '8',
              },
              {
                id: '4',
                message: 'Please go through our exercises videos if you need any assistance call 876354221!',
                trigger: '8',

              },
              {
                id: '5',
                message: 'Could you refer to physiotherapy page on your dashboard or call 3426324134 for more assistance',
                trigger: '8',
              },
              {
                id: '6',
                message: 'Install ErgoPerfecto Plugin from google store !',
                trigger: '8',

              },
              {
                id: '7',
                message: 'Schedule an appointment by visiting http://localhost:3000/home !',
                trigger: '8',
              },
              {
                id: '8',
                message: 'Need more help?',
                trigger: '9',
              },
              {
                        id: '9',
                        options: [
                          { value: '1', label: 'Yes', trigger: '2' },
                          { value: '2', label: 'No', trigger: '10' },
                        ],

                      },

                      {
                id: '10',
                message: 'Thank You!',
               end: true,
              },
            ]}
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default Chatbot;
