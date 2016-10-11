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
    if (infos) {
      let { businesses } = infos;
      let {name, rating_img_url}
      console.log('businesses:', businesses);
    }
    return (
      <div className="row">

      </div>
    )
  }
}
