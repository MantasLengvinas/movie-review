import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import avengers from '../images/avengers.jpg'
import spiderman from '../images/spiderman.jpg'
import deadpool from '../images/deadpool.jpg'
import hercules from '../images/hercules.jpg'
import godzilla from '../images/godzilla.jpg'

class WelcomeScreen extends Component {
  render(){
    return (
        <div className="row">        
            <Carousel interval={3000} pause={false} className="full-width">  
              <Carousel.Item style={{'height':"100vh", 'width':"inherit"}} >  
                <img style={{'height':"100%", 'width':"inherit"}}  
                  className="d-block w-100"
                  src={spiderman} alt=""  /> 
                <Carousel.Caption>  
                    <h1 className="black-outline">Welcome!</h1>
                    <h3 className="black-outline">In order to review movies, you must sign in</h3>  
                </Carousel.Caption>  
              </Carousel.Item> 
              <Carousel.Item style={{'height':"100vh", 'width':"inherit"}} >  
                <img style={{'height':"100%", 'width':"inherit"}}  
                  className="d-block w-100"
                  src={deadpool} alt="" />  
                <Carousel.Caption>  
                    <h1 className="black-outline">Welcome!</h1>
                    <h3 className="black-outline">In order to review movies, you must sign in</h3>   
                </Carousel.Caption>  
              </Carousel.Item>
              <Carousel.Item style={{'height':"100vh", 'width':"inherit"}} >  
                <img style={{'height':"100%", 'width':"inherit"}}  
                  className="d-block w-100"
                  src={avengers} alt="" />  
                <Carousel.Caption>  
                <h1 className="black-outline">Welcome!</h1>
                    <h3 className="black-outline">In order to review movies, you must sign in</h3>  
                </Carousel.Caption>  
              </Carousel.Item>
              <Carousel.Item style={{'height':"100vh", 'width':"inherit"}} >  
                <img style={{'height':"100vh", 'width':"inherit"}}  
                  className="d-block w-100"
                  src={hercules} alt="" />  
                <Carousel.Caption>  
                <h1 className="black-outline">Welcome!</h1>
                    <h3 className="black-outline">In order to review movies, you must sign in</h3> 
                </Carousel.Caption>  
              </Carousel.Item> 
              <Carousel.Item style={{'height':"100vh", 'width':"inherit"}} >  
                <img style={{'height':"100vh", 'width':"inherit"}}  
                  className="d-block w-100"
                  src={godzilla} alt="" />  
                <Carousel.Caption>  
                <h1 className="black-outline">Welcome!</h1>
                    <h3 className="black-outline">In order to review movies, you must sign in</h3>  
                </Carousel.Caption>  
              </Carousel.Item>         
            </Carousel>
        </div>
    );
  }
}

export default WelcomeScreen;
