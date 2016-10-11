import  React, { Component } from 'react';
import YelpAction from '../actions/YelpAction';


export default class SearchBar extends Component {
  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    this.businessSubmit = this.businessSubmit.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    let term = this.refs.term.value;
    let location = this.refs.location.value;
    YelpAction.searchInfos(term, location);
  }

  businessSubmit(e) {
    e.preventDefault();
    let yelpId = this.refs.yelpId.value;
    YelpAction.searchBusiness(yelpId);
  }

  render() {
    return (
      <div className="row">
        <div className="navbar-form navbar-left" role="search">
          <img src="http://kabukisprings.com/wp-content/uploads/2015/03/yelp-logo.png" height="100" />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">Find</span>
              <input type="text" className="form-control" placeholder="caffe" ref="term"/>
            </div>&nbsp;&nbsp;
            <div className="input-group">
              <span className="input-group-addon">Near</span>
              <input type="text" className="form-control" placeholder="NewYork" ref="location"/>
            </div>&nbsp;&nbsp;
          </div>
          <button className="btn btn-default" onClick={this._onSubmit}><i className="glyphicon glyphicon-search"></i></button>
          &nbsp;&nbsp;&nbsp;
          <div className="input-group">
            <span className="input-group-addon">Business</span>
            <input type="text" className="form-control" placeholder="YelpId" ref="yelpId"/>
          </div>&nbsp;
          <button className="btn btn-danger" onClick={this.businessSubmit}><i className="glyphicon glyphicon-search"></i></button>
        </div>
      </div>
    )
  }
}
