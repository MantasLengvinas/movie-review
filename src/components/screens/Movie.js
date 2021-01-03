import React, { Component } from 'react'
import { withRouter } from "react-router";
import $ from "jquery";

let rating = 5;

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
            rating = this.state.currentR;
        });
    }
  
    renderRatings(){
      var { rscale } = this.props;
      var {currentR} = this.state;
      let rButtons = [];
      for(var i = 1; i <= rscale; i++){
        rButtons.push(<label key={i}>
              <input type="radio" value={i} name="rad" className="invisible" checked={currentR === "value"+i} onChange={this.handleOptionChange} /><span style={{"color": "#fff1b5"}} className="fa fa-star"></span>
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
            movie: {},
            movieReviews: []
        }
        
        this.movieReviews = this.movieReviews.bind(this);
        this.movieData = this.movieData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    movieData(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=530c56d37a8200c3cb27b16bcc2e444c`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movie: data,
                    response: ""
                })
        })
    }

    movieReviews(id){
        fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/movies/getReviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer "+localStorage.getItem("token")
            },
            body: JSON.stringify({
                movieID: id
            }),
            })
            .then((res) => res.json())
            .then(async (data) => {
                this.setState({
                    movieReviews: data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        const id = this.props.match.params.movieID;
        this.movieReviews(id);
        this.movieData(id)
    }

    // https://api.themoviedb.org/3/movie/733317?api_key=530c56d37a8200c3cb27b16bcc2e444c

    handleSubmit(event) {
        $('#loader,#loading-text').toggleClass('loaded');
        let data = {
            "email": localStorage.getItem("email"),
            "movieId": this.props.match.params.movieID,
            "review": this.state.review,
            "rating": rating
        };
        fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/movies/addMovie", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Authorization": "Bearer "+localStorage.getItem("token")
            },
            body: JSON.stringify(data),
          })
          .then((res) => res.json())
          .then(async (data) => {
            if(data.success){
                this.setState({
                    response: "Your review has been saved!"
                })
                $('#loader,#loading-text').toggleClass('loaded');
                setInterval(()=>{
                    window.location.replace("/?rateSuccess");
                }, 2500)
            }
          })
          .catch((err) => {
            $('#loader,#loading-text').toggleClass('loaded');
            console.log(err);
          });
        
        event.preventDefault();
      }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){

        let reviewList;    

        let goBack = () => {
            window.location.replace("/");
        }

        if(this.state.movieReviews.length > 0){
            reviewList = this.state.movieReviews.map(review => 
                <div className="row border border-dark p-3">
                    <div className="col-md-4">
                        <h4 className="w-100">
                            {review.username}
                        </h4>
                        <p>
                            Rating: <i>{review.rating}/5 stars</i>
                        </p>
                    </div>
                    <div className="col-md-8">
                        <p><i>{review.review}</i></p>
                    </div>
                </div>
            )
        }
        else{
            reviewList = "This movie has no reviews"
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
                    <h3 className="black-outline red">
                        {this.state.response}
                    </h3>
                </div>
            </div>
            <div className="row mt-5 border border-light rounded">
                <div className="col-md">
                    <div className="row mt-3">
                        <div className="col-md-5">
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`} alt="movie" className="m-3" style={{'height':"330px", 'width':"450px"}}srcset=""/>
                            <p className="ml-3">Current global rating: <i>{this.state.movie.vote_average}/10</i> </p>
                        </div>
                        <div className="col-md-7">
                            <div className="col m-1 ml-1">
                                <h3 className="black-outline">
                                    {this.state.movie.original_title}
                                </h3>
                                <p>
                                    Released: <i>{this.state.movie.release_date}</i>
                                </p>
                                <p>
                                    Homepage: <i><a target="_blank" rel="noreferrer" href={this.state.movie.homepage}>{this.state.movie.homepage}</a></i>
                                </p>
                                <p>
                                    Overview: <i>{this.state.movie.overview}</i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top border-light">
                        <div className="col-md d-flex justify-content-center mt-3">
                            <h4>What other people think about this movie</h4>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md mt-3" style={{"max-height": "350px", "overflow": "auto"}}>
                            {reviewList}
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