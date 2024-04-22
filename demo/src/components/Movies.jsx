import { Movie } from './Movie';

function Movies (props) {
    const { movies = [] } = props;
    // console.log("->", movies);
    return (
        <div className="movies">
            
            {(typeof movies !== 'undefined' && movies.length) ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ):(
                <h4>Not found</h4>
            )}
        </div>
    );
}

export { Movies };