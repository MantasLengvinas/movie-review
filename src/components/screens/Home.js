import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

class HomeScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      movieData: []
    }

    this.getMoviesData = this.getMoviesData.bind(this);
  }

  getMoviesData() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=530c56d37a8200c3cb27b16bcc2e444c")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movieData: data.results
        })
    })
  }

  componentDidMount(){
    this.getMoviesData();
  }

  render(){

    const movieList = this.state.movieData.map(movie =>
      <div className="carousel-item">
        <Link to={`/movie/${movie.id}`}>
          <img className="d-block w-100" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
        </Link>
        <div class="carousel-caption d-none d-md-block">
          <h2 className="black-outline">{movie.original_title}</h2>
        </div>
      </div>
    );

    return (
      <div className="homeScreen container">
        <div className="row">
          <div className="col-md d-flex justify-content-center">
            <h3>Select a movie you would like to review</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 mt-5 border border-light rounded p-3">
            <Carousel keyboard={true} interval={5000}>
              {movieList}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
