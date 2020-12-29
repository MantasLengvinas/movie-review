import React, { Component } from 'react'
import { withRouter } from "react-router";

let score = 5;

class Rating extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        rButtons :[],
        currentR : ""
      }
      this.renderRatings = this.renderRatings.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    componentDidMount(){
      this.renderRatings();
    }
    handleOptionChange(e) {
        this.setState({ currentR: e.target.value }, () => {
            this.renderRatings()
            score = this.state.currentR;
        });
    }
  
    renderRatings(){
      var { rscale } = this.props;
      var {currentR} = this.state;
      let rButtons = [];
      for(var i = 1; i <= rscale; i++){
        rButtons.push(<label key={i}>
              <input type="radio" value={i} name="rad" className="invisible" checked={currentR == "value"+i} onChange={this.handleOptionChange} /><span style={{"color": "#fff1b5"}} className="fa fa-star"></span>
            </label>
        );
      }
      this.setState({
        rButtons : rButtons
      })
    }
    render() {
      
      var { rButtons } = this.state;
      return (
        <>
        <div className="form-group">
            <label for="exampleReview" className="color-white">Your rating:</label>
            <div className="rating_scale">
                {rButtons}
          </div>
        </div>
        </>
      );
    }
}
  

class Movie extends Component{

    constructor(props){
        super(props);
    
        this.state = {
            review: "",
            movie: {}
        }
        
        this.movieData = this.movieData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    movieData(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=530c56d37a8200c3cb27b16bcc2e444c`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movie: data
                })
        })
    }

    componentDidMount() {
        const id = this.props.match.params.movieID;
        this.movieData(id)
    }

    // https://api.themoviedb.org/3/movie/733317?api_key=530c56d37a8200c3cb27b16bcc2e444c

    handleSubmit(event) {
        console.log(score);
        event.preventDefault();
      }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){

        let goBack = () => {
            window.location.replace("/");
        }

        return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <button onClick={goBack} className="global-button" id="register-button">
                        Back
                    </button>
                </div>
                <div className="col-md d-flex justify-content-center">
                    <h3 className="black-outline">
                        
                    </h3>
                </div>
            </div>
            <div className="row mt-5 border border-light rounded">
                <div className="col-md">
                    <div className="row mt-3">
                        <div className="col-md-5">
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`} alt="movie" className="m-3" style={{'height':"330px", 'width':"450px"}}srcset=""/>
                            <p className="ml-3">Current rating: <i>{this.state.movie.vote_average}/10</i> </p>
                        </div>
                        <div className="col-md-7">
                            <div className="col m-1 ml-1">
                                <h3 className="black-outline">
                                    {this.state.movie.original_title}
                                </h3>
                                <p>
                                    Homepage: <i><a target="_blank" href={this.state.movie.homepage}>{this.state.movie.homepage}</a></i>
                                </p>
                                <p>
                                    Overview: <i>{this.state.movie.overview}</i>
                                </p>
                                <p>
                                    Released: <i>{this.state.movie.release_date}</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top border-light">
                        <div className="col-md d-flex justify-content-center mt-3">
                            <h4>Your review of the movie</h4>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label for="exampleReview" className="color-white">Opinion about the movie</label>
                                            <input type="textarea" name="review" className="form-control" rows="5" id="exampleInputEmail" aria-describedby="review" placeholder="I love this movie.." value={this.state.review} onChange={this.handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-center">
                                    <Rating
                                        name="rating"
                                        rscale="5"
                                        currentR="value5"
                                    />
                                    </div>
                                </div>
                                <div className="col-md-2 d-flex justify-content-end float-right mt-2 mb-3">
                                    <button type="submit" className="color-white btn full-width" id="register-button">Save review</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(Movie);