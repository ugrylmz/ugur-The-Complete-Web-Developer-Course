import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";
/*
We have App component which has two states
robots and searchfield
we can use constructor function to create this.state
changes in robots and searchfield describe the app in constructor, in state.

virtual dom is an object collects this entire state and react uses 
this state to render and pass them down as props to these components
so that components that are just pure functions can just render 
*/

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value }); // update the state
  };
  render() {
    const filteredRobots = this.state.robots.filter(s => {
      return s.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase()); // we manage the state is here...
    });
    // console.log(filteredRobots);
    return (
      <div className="tc">
        <h1 className="center f1">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
