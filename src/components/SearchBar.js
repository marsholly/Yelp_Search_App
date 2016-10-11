import  React, { Component } from 'react';


export default class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <form className="navbar-form navbar-left" role="search">
          <img src="http://kabukisprings.com/wp-content/uploads/2015/03/yelp-logo.png" height="100" />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">Find</span>
              <input type="text" className="form-control" placeholder="caffe"/>
            </div>&nbsp;&nbsp;
            <div className="input-group">
              <span className="input-group-addon">Near</span>
              <input type="text" className="form-control" placeholder="NewYork"/>
            </div>&nbsp;&nbsp;
          </div>
          <button type="submit" className="btn btn-default"><i className="glyphicon glyphicon-search"></i></button>
        </form>
      </div>
    )
  }
}
