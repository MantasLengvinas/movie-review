import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

class HomeScreen extends Component {

  constructor(props){
    super(props);

    this.key = Math.floor(Math.random() * (499 - 1 + 1)) + 1;

    this.state = {
      movieData: [],
      searchedMovie: ""
    }

    this.getMoviesData = this.getMoviesData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getMoviesData() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=530c56d37a8200c3cb27b16bcc2e444c`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("movieDataString", JSON.stringify(data))
        this.setState({
          movieData: data.results
        })
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    if(localStorage.getItem("movieDataString") === null){
      this.getMoviesData();
    }
    else{
      let mdj = JSON.parse(localStorage.getItem("movieDataString"))
      this.setState({
        movieData: mdj.results
      })
    }
  }

  render(){

    

    const movieList = this.state.movieData.map(movie =>
      <div className="carousel-item" key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <img className="d-block w-100" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="image_not_found" />
        </Link>
        <div className="carousel-caption d-none d-md-block">
          <h2 className="black-outline">{movie.original_title}</h2>
        </div>
      </div>
    );

    return (
      <div className="homeScreen container">
        <div className="row">
          <div className="col-md d-flex justify-content-center">
            <h3>Search for a movie you would like to review</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md d-flex justify-content-center">
            <form className="d-inline-flex col-md-8 border-bottom border-light">
              <div className="form-group col-sm-9">
                <input type="text" name="searchedMovie" className="form-control" id="searchingMovie" aria-describedby="search" placeholder="Search for a movie" value={this.state.searchedMovie} onChange={this.handleChange} required />
              </div>
              <div className="col-sm-3">
                <Link to={`/searchMovie/${this.state.searchedMovie}`}>
                  <button type="submit" className="btn btn-primary full-width ">Search</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md d-flex justify-content-center">
            <h3>Popular movies to review</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 mt-2 border border-light rounded p-3">
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
