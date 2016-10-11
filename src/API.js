import axios from 'axios';
import ServerAction from './actions/ServerAction';

const API = {
  searchInfos(term, location) {
    axios.get(`/yelp/${term}/${location}`)
      .then(res => res.data)
      .then(ServerAction.recieveAllInfos)
      .catch(console.error)
  },
  searchBusiness(yelpId) {
    axios.get(`/yelp/business/${yelpId}`)
      .then(res => res.data)
      .then(ServerAction.recieveAllInfos)
      .catch(console.error)
  }
}

export default API;
