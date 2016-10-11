import  React, { Component } from 'react';
import YelpStore from '../stores/YelpStore';

export default class YelpBoard extends Component {
  constructor() {
    super();
    this.state = {
      infos: YelpStore.getAllInfos()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    YelpStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    YelpStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({infos: YelpStore.getAllInfos()});
  }

  render() {
    let { infos } = this.state;
    let infoDiv;
    if (infos) {
      let { businesses } = infos;
      if( businesses ) {
        infoDiv = businesses.map((business, index) => {
          let { name, rating_img_url, location, image_url} = business;
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
                  <div>

                  </div>
                  <p><img src={rating_img_url}/></p>
                  <p>{city}</p>
                  {address}
                </div>
              </div>
            </div>
          )
        })
      } else {
        infoDiv = <div></div>
      }
    }
    return (
      <div className="row">
        {infoDiv}
      </div>
    )
  }
}
