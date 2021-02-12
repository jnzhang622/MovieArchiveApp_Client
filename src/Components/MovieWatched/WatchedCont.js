import React from 'react';
import MovieCard from "./MovieCard";

function MovieSearchCont(props) {
  // console.log(props)

  // this.handleAddToWatched = (e) => { //adds new movie to watched
  //   e.preventDefault()
  //   fetch(`http://localhost:3000/watcheds`, {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //           Poster: this.props.movie.Poster,
  //           Title: this.props.movie.Title,
  //           Type: this.props.movie.Type,
  //           Year: this.props.movie.Year,
  //           imdbID: this.props.movie.imdbID

  //       })
  //   })
  //       .then(resp => resp.json())
  //       // .then(data => {this.props.handleNewNominee(data)})
  // }

  // this.handleAddToBacklist = (e) => { //adds new movie to backlist
  //   e.preventDefault()
  //   fetch(`http://localhost:3000/backlists`, {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //           Poster: this.props.movie.Poster,
  //           Title: this.props.movie.Title,
  //           Type: this.props.movie.Type,
  //           Year: this.props.movie.Year,
  //           imdbID: this.props.movie.imdbID,
  //           liked: false
  //       })
  //   })
  //       .then(resp => resp.json())
  //       // .then(data => {this.props.handleNewNominee(data)})
  // }


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