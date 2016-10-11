import API from '../API';
import AppDispatcher from '../AppDispatcher';

const YelpAction = {
  searchInfos(term, location) {
    API.searchInfos(term, location)
  },
  favorite(business) {
    AppDispatcher.dispatch({
      type:'FAVORITE',
      payload: { business }
    })
  },
  unFavorite(business) {
    AppDispatcher.dispatch({
      type:'UNFAVORITE',
      payload: { business }
    })
  }
}

export default YelpAction;
