import  React, { Component } from 'react';
import FavoriteYelpStore from '../stores/FavoriteYelpStore';
import YelpAction from '../actions/YelpAction';

export default class favoriteYelp extends Component {
  constructor() {
    super();
    this.state = {
      favoriteBusiness: FavoriteYelpStore.getFavoriteBusiness()
    }
    this._onChange = this._onChange.bind(this);
    this.unFavorite = this.unFavorite.bind(this);
  }

  componentWillMount() {
    FavoriteYelpStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    FavoriteYelpStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({infos: FavoriteYelpStore.getFavoriteBusiness()});
  }

  unFavorite(business) {
    let { name, rating_img_url, location, image_url } = business;
    let businessObj = {
      name,
      rating_img_url,
      location,
      image_url
    }
    YelpAction.unFavorite(businessObj);
  }

  render() {
    let { favoriteBusiness } = this.state;
    let infoDiv;
    if (favoriteBusiness) {
      infoDiv = favoriteBusiness.map((business, index) => {
        let { name, rating_img_url, location, image_url } = business;
        let {city, display_address} = location;
        let address = display_address.map( a => {
          return <p key = {a}>{a}</p>
        })
        return (
          <div className="col-md-3" key={index}>
            <div className="infoArea">
              <div>
                <img src={image_url} height="100" width="160"/>
              </div>
              <hr/>
              <div>
                <p>{name}</p>
                <p><img src={rating_img_url}/></p>
                <p>{city}</p>
                {address}
                <button className="btn btn-xs btn-default" onClick={()=>this.unFavorite(business)}><i className="glyphicon glyphicon-remove"></i></button>
              </div>
            </div>
          </div>
        )
      })
    } else {
      infoDiv = <div></div>
    }
    return (
      <div className="container">
        <h1 className="text-center">Favorite Yelp</h1>
        <div className="row">
          {infoDiv}
        </div>
      </div>
    )
  }
}
