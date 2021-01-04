import React, {Component} from 'react' 
import { Link } from 'react-router-dom'

class SearchMovie extends Component {

    constructor(props){
        super(props);

        this.state = {
            movieData: []
        }
        
        this.getSearchedMovies = this.getSearchedMovies.bind(this);
    }

    getSearchedMovies(query){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=530c56d37a8200c3cb27b16bcc2e444c&query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    movieData: data.results
                })
        })
    }

    componentDidMount(){
        const query = this.props.match.params.query;

        this.getSearchedMovies(query);
    }

    render(){

        let goBack = () => {
            window.location.replace("/");
        }

        let movieList = this.state.movieData.map(movie => 
            <Link to={`/movie/${movie.id}`}>
                <div className="row border border-dark">
                    <div className="col-md-4">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="not_found" className="m-3" style={{'height':"180px", 'width':"280px"}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="col m-1 ml-1">
                            <h3 className="black-outline">
                                {movie.original_title}
                            </h3>
                            <p><i>{movie.release_date}</i></p>
                            <p>
                                Overview: <i>{movie.overview}</i>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        )

        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <button onClick={goBack} className="global-button" id="register-button">
                            Back
                        </button>
                    </div>
                    <div className="col-md d-flex justify-content-center">
                        <h3 className="black-outline">
                            Results of your search
                        </h3>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {movieList}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchMovie;