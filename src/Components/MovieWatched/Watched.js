import React from "react";
import WatchedCont from "./WatchedCont"

class Watched extends React.Component {

    state={
      watchedMovies = []
    }
    
  componentDidMount(){ //fetches from rails backend for watched movies
    fetch("http://localhost:3000/watcheds")
        .then(resp => resp.json())
        .then(data => this.setState({watchedMovies: data}))
  }

  handleChange = (e) => { //handles the text change in the searchbox
    this.setState({searchTerm: e.target.value})}

  changeSearchCategory = (e) => { //change filter
    this.setState({searchCategory: e.target.value})
  }

    render(){
  
      return (
        <div className="defaultCenter">
          <WatchedCont movies={this.state.watchedMovies}/>
        </div>
      )
    }
}
  
  export default Watched;
  

