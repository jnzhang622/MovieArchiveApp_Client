import React from "react";
import WatchedCont from "./WatchedCont"

class Watched extends React.Component {

    state={
      watchedMovies: [],
      searchTerm: "",
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

  returnsArray = () => {
      let arrayToReturn = this.state.watchedMovies.filter(movies => { //controls the Filter
          return (
              movies.Title.toLowerCase().includes(this.state.searchterm.toLowerCase())
          )
      })
      // return this.sortControl(arrayToReturn)
      return arrayToReturn
  }

  // sortControl = (array) => {
  //     let currentMovies = [...array]
  //     if (this.state.renderSort === "None") {
  //         currentMovies = [...array]
  //     }
  //     else if (this.state.sort === "price") {
  //         currentMovies = currentMovies.sort((a, b) => parseFloat(a.price) > parseFloat(b.price) ? -1 : 1)
  //     }
  //     else if (this.state.sort === "price_change_pct") {
  //         let filteredCoins = currentMovies.filter(coin => coin['1d'] )
  //         currentMovies = filteredCoins.sort((a, b) =>
  //          parseFloat(a['1d'].price_change_pct) > parseFloat(b['1d'].price_change_pct) ? -1 : 1)
  //     }
  //     return currentMovies
  // }

    render(){
      return (
        <div className="defaultCenter">
          <div className="imdbFormDiv">
              <form onChange={this.handleChange} className="imdbForm">
              <input className="imdbFormInput"
                  placeholder="Search..." 
                  
                  />
              </form>
              <div className="filterDiv">
                  <h4>Filter:</h4>
                  <select className="filterDropdown" onChange={this.changeFilterCategory}>
                  <option value={""}>None</option>
                  <option value={"&type=movie"}>Movie</option>
                  <option value={"&type=series"}>Series</option>
                  <option value={"&type=episode"}>Episode</option>
                  <option value={"&type=episode"}>Favorites</option>
                  </select>
              </div>
              <div className="filterDiv">
                  <h4>Sort:</h4>
                  <select className="filterDropdown" onChange={this.changeSortCategory}>
                  <option value={""}>None</option>
                  <option value={""}>Alphabetically</option>
                  <option value={""}>Release</option>
                  <option value={""}></option>
                  </select>
              </div>
          </div>

          <div className="defaultCenter">
            <WatchedCont 
              movies={this.state.watchedMovies}
              searchTerm={this.state.searchTerm}
              />
            {/* <WatchedCont movies={this.returnsArray}/> */}
          </div>
        </div>
      )
    }
}
  
  export default Watched;
  

