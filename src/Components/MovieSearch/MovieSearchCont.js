import React from 'react';
import MovieCard from "../MovieCard";

function MovieSearchCont(props) {
  // console.log(props)

  return (
    <div className="searchCont">
        {props.movies.Search.map(movie => {
            return (
                <div>
                    <MovieCard movie = {movie}
                      handleNewNominee={props.handleNewNominee}/>
                </div>
                )
            })
        }
    </div>
  )
}

export default MovieSearchCont;