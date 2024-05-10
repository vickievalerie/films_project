import React from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Preloader } from "../components/preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=9ebc9b1d&s=star%20wars`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search, loading: false}));
    }

    searchMovies = (str, type = "all") => {
        fetch(`http://www.omdbapi.com/?apikey=9ebc9b1d&s=${(str === '' ? "star%20wars" : str)}${type !=="all" ? `&type=${type}` : "" }`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search ? data.Search : [], loading: false}))
    }

    render() {
        const { movies, loading } = this.state;

        return <main className="container content white">
            <Search searchMovies={this.searchMovies} />
            {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
        </main >
    }
}

export { Main };