import React, { Component } from 'react'
import $ from 'jquery'

class Reviews extends Component {
    constructor(props){
        super(props);

        this.state = {
            reviewsData: []
        }
        
        this.getReviews = this.getReviews.bind(this);
    }

    getReviews(){
        $('#loader,#loading-text').toggleClass('loaded');
        fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/movies/getMovies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Authorization": "Bearer "+localStorage.getItem("token")
            },
            body: JSON.stringify({
              email: localStorage.getItem("email"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    reviewsData: data
                })
                $('#loader,#loading-text').toggleClass('loaded');
            })
        .catch((err) => {
            console.log(err);
          });

    }

    componentDidMount(){
        this.getReviews();
    }

    render(){
        let reviews = this.state.reviewsData.map(review => {
            return(
            <div key={review.movieID} className="row w-100 border border-light p-3">
                <div className="col-md-5">
                <img src={`https://image.tmdb.org/t/p/w500${review.movieThumbnail}`} alt="image_not_found" className="m-1" style={{'height':"330px", 'width':"450px"}}/>
                </div>
                <div className="col-md-7" style={{"height": "340px", "overflowY": "auto"}}>
                    <div className="col m-1 ml-1">
                        <div className="col w-100">
                            <h3 className="black-outline">
                                {review.movieTitle}
                            </h3>
                        </div>
                        <div className="col w-100">
                            <label htmlFor="">
                                Release date: <i>{review.movieReleased}</i>
                            </label>
                        </div>
                        <div className="col w-100 mt-4">
                            <label htmlFor="">
                                <h4>Overview</h4>
                            </label>
                            <p>
                                <i>{review.movieOverview}</i>
                            </p>
                        </div>
                        <div className="col w-100 pt-3 border-top border-light">
                            <label htmlFor="">
                                <h4>Your review about this movie</h4>
                            </label>
                            <p>
                                <i>{review.review}</i>
                            </p>
                        </div>
                        <div className="col w-100 mt-4">
                            <label htmlFor="">
                                <h5>You have rated this movie</h5>
                            </label>
                            <p>
                                <span className="fa fa-star mr-1" style={{"font-size": "23px", "color": "yellow"}}></span><i>{review.rating}/5</i>
                            </p>
                        </div>

                    </div>
                </div>
            </div>);
        })

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
                            Reviews you have made
                        </h3>
                    </div>
                </div>
                <div className="row mt-5">
                    {reviews.length === 0 ? "You have not done any reviews yet" : reviews}
                </div>
            </div>
        );
    }
}

export default Reviews;