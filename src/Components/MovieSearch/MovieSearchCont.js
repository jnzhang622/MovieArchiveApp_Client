import React from 'react';
import MovieCard from "./MovieCard";

function MovieSearchCont(props) {

  return (
    <div className="searchCont">
        {props.movies.Search.map(movie => {
            return (
                <div>
                    <MovieCard movie = {movie}/>
                </div>
                )
            })
        }
    </div>
  )
}

export default MovieSearchCont;