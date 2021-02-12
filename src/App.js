import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MovieSearch from "./Components/MovieSearch/MovieSearch";
// import MovieWatched from "./Components/MovieWatched/Watched";
// import MovieBacklist from "./Components/MovieBacklist/MovieBacklist";
import './App.css';

class App extends React.Component {

  state={
    apiKey: `${process.env.REACT_APP_API_KEY}`,
  }

  // componentDidMount(){ //fetches from rails backend
  //   fetch("http://localhost:3000/nominees")
  //       .then(resp => resp.json())
  //       .then(data => this.setState({nominees: data}))
  // }
  
  // handleNewNominee = (newNominee) => { //adds new nominee to nominees state without reloading
  //   this.setState({nominees: [...this.state.nominees, newNominee]})
  // }

  // handleNomineeUpdate = (e) => { //removes nominee from nominees state without reloading
  //   // console.log(e)
  //   let updatedNominees = this.state.nominees.filter((nominee) => {
  //     if (nominee.id === e){
  //       return false
  //     } 
  //     return true
  //   })
  //   this.setState({nominees: updatedNominees})
  // }

  render(){
    console.log(this.state.searchCategory)
    return (
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" ><MovieSearch 
              apiKey = {this.state.apiKey}/></Route>
            {/* <Route exact path="/watched" ><MovieWatched /></Route> */}
          </Switch>
        
      </Router>
    );
  }
}

export default App;
