import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import lord_of_war from '../images/lord_of_war.jpg'
import bloodshot from '../images/bloodshot.jpg'
import project_power from '../images/Project_power.jpeg'
import underwater from '../images/underwater.jpg'
import tenet from '../images/tenet.jpg'

class WelcomeScreen extends Component {
  render(){
    return (
        <div className="row">
          <div className="col-md d-flex justify-content-start ">          
            <Carousel interval={5000} keyboard={false} pauseOnHover={true}>  
              <Carousel.Item style={{'height':"480px", 'width':"360px"}} >  
                <img style={{'height':"480px", 'width':"360px"}}  
                  className="d-block w-100"
                  src={lord_of_war} alt=""  />  
                <Carousel.Caption>  
                  <h3>{}</h3>  
                </Carousel.Caption>  
              </Carousel.Item> 
              <Carousel.Item style={{'height':"480px", 'width':"360px"}} >  
                <img style={{'height':"480px", 'width':"360px"}}  
                  className="d-block w-100"
                  src={bloodshot} alt="" />  
                <Carousel.Caption>  
                  <h3>{}</h3>  
                </Carousel.Caption>  
              </Carousel.Item>
              <Carousel.Item style={{'height':"480px", 'width':"360px"}} >  
                <img style={{'height':"480px", 'width':"360px"}}  
                  className="d-block w-100"
                  src={project_power} alt="" />  
                <Carousel.Caption>  
                  <h3>{}</h3>  
                </Carousel.Caption>  
              </Carousel.Item>
              <Carousel.Item style={{'height':"480px", 'width':"360px"}} >  
                <img style={{'height':"480px", 'width':"360px"}}  
                  className="d-block w-100"
                  src={underwater} alt="" />  
                <Carousel.Caption>  
                  <h3>{}</h3>  
                </Carousel.Caption>  
              </Carousel.Item> 
              <Carousel.Item style={{'height':"480px", 'width':"360px"}} >  
                <img style={{'height':"480px", 'width':"360px"}}  
                  className="d-block w-100"
                  src={tenet} alt="" />  
                <Carousel.Caption>  
                  <h3>{}</h3>  
                </Carousel.Caption>  
              </Carousel.Item>        
            </Carousel>
          </div>
          <div className="col-md-8 m-2 welcome-text">
            <h1>Sveiki atvykę!</h1>
          </div>
        </div>
    );
  }
}

export default WelcomeScreen;
