import React from 'react';
import noImage from '../w13911i0.jpg'

class WatchedCard extends React.Component{

  updateFavoriteEntry = (e) => { //adds new movie to watched
    e.preventDefault()
    fetch(`http://localhost:3000/watcheds`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Poster: this.props.movie.Poster,
            Title: this.props.movie.Title,
            Type: this.props.movie.Type,
            Year: this.props.movie.Year,
            imdbID: this.props.movie.imdbID

        })
    })
        .then(resp => resp.json())
        // .then(data => {this.props.handleNewNominee(data)})
  }

  deleteFromWatched = (e) => { //adds new movie to backlist
    e.preventDefault()
    fetch(`http://localhost:3000/backlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Poster: this.props.movie.Poster,
            Title: this.props.movie.Title,
            Type: this.props.movie.Type,
            Year: this.props.movie.Year,
            imdbID: this.props.movie.imdbID,
            liked: false
        })
    })
        .then(resp => resp.json())
        // .then(data => {this.props.handleNewNominee(data)})
  }
  render() {
    // console.log(this.props.movie.Title)
    return (
      <div className="searchCard">
          <h5>{this.props.movie.Title} ({this.props.movie.Year})</h5>
          <a href={`https://www.imdb.com/title/${this.props.movie.imdbID}`}>
            <img src={(this.props.movie.Poster !== "N/A") ?
              this.props.movie.Poster : noImage
            }
              width="200px" 
              href={`https://www.imdb.com/title/${this.props.movie.imdbID}`}
              alt={this.props.movie.Title}/>
          </a>
          <div>
            {(this.props.movie.liked) ? 
              <button onClick={this.updateFavoriteEntry}>UnFavorite</button> :
              <button onClick={this.updateFavoriteEntry}>Favorite</button>
            }
            <button onClick={this.deleteFromWatched}>X</button>
          </div>
      </div>
    )
  }
}
export default WatchedCard;