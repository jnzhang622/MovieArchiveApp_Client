import React from "react";
import MovieSearchCont from "./MovieSearchCont"

class MovieSearch extends React.Component {

    state={
      searchTerm: "",
      currentSearch: "",
      searchCategory: "",
      page: 1,
      searchResults: []
    }
  
  searchIMDB = (e) => { //uses inputed search term to search omdb
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?apikey=${this.props.apiKey}${this.state.searchCategory}&s=${this.state.searchTerm}&page=${this.state.page}`)
        .then(resp => resp.json())
        .then(data => this.setState({ 
          searchResults: data,
          currentSearch: this.state.searchTerm
      }))
  }

  handleChange = (e) => { //handles the text change in the searchbox
    this.setState({searchTerm: e.target.value})}

  changeSearchCategory = (e) => { //change filter
    this.setState({searchCategory: e.target.value})
  }

    render(){
  
      return (
        <div className="defaultCenter">
            <div className="imdbFormDiv">
                <form onSubmit={this.searchIMDB} className="imdbForm">
                <input className="imdbFormInput"
                    placeholder="Search..." 
                    onChange={this.handleChange}
                    />
                </form>
                <div className="filterDiv">
                    <h4>Filter:</h4>
                    <select className="filterDropdown" onChange={this.changeSearchCategory}>
                    <option value={""}>None</option>
                    <option value={"&type=movie"}>Movie</option>
                    <option value={"&type=series"}>Series</option>
                    <option value={"&type=episode"}>Episode</option>
                    </select>
                </div>
            </div>
            <div className="mainCont">
                <div className="searchSubCont">
                    {
                    this.state.searchResults.Search ? 
                        <div >
                        <h3>Results for {this.state.currentSearch}...</h3>
                        <MovieSearchCont movies={this.state.searchResults}/>
                        </div>
                    : <div>Please use the searchbar to search</div>
                    }
                </div>
            </div>
        </div>
      )
    }
}
  
  export default MovieSearch;
  

