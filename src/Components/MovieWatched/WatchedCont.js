import React from 'react';
import WatchedCard from "./WatchedCard";

class WatchedCont extends React.Component {

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

  

  returnsArray = () => {
    let arrayToReturn = this.props.movies.filter(movie => { //controls the Filter
        return (
          movie.Title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
        )
    })
    return arrayToReturn
  }

  render(){
    return (
      <div className="searchCont">
          {this.returnsArray().map(movie => {
              return (
                  <div>
                      <WatchedCard movie = {movie}
                        // handleNewNominee={this.props.handleNewNominee}
                        />
                  </div>
                  )
              })
          }
      </div>
    )
  }
}

export default WatchedCont;