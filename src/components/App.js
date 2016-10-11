import  React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import SearchBar from './SearchBar';
import YelpBoard from './YelpBoard';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <SearchBar />
          <hr/>
          <YelpBoard />
        </div>
      </MuiThemeProvider>
    )
  }
}
