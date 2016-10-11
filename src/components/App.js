import  React, { Component } from 'react';
import SearchBar from './SearchBar';
import YelpBoard from './YelpBoard';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <hr/>
        <YelpBoard />
      </div>
    )
  }
}
