import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

class HomeScreen extends Component {

  render(){

    let movies = [
      {
        title: "Amazing spiderman",
        id: "75899",
        photo: "/z15NpieRw7jL7bKoICwLO5j7FgZ.jpg"
      },
      {
        title: "Thor",
        id: "75899",
        photo: "/z15NpieRw7jL7bKoICwLO5j7FgZ.jpg"
      }
    ]

    const movieList = movies.map(({title, id, photo}) =>
      <div className="carousel-item">
        <Link to={`/movie/${id}`}>
          <img className="d-block w-100" src={`https://image.tmdb.org/t/p/w500${photo}`} alt="" />
        </Link>
        <div class="carousel-caption d-none d-md-block">
          <h3 className="black-outline">{title}</h3>
      </div>
      </div>
    );

    return (
      <div className="homeScreen container">
        <div className="row">
          <div className="col-md d-flex justify-content-center">
            <h3>Select movie you would like to review</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 mt-5">
            <Carousel keyboard={true} interval={null}>
              {movieList}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
