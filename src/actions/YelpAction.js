import API from '../API';

const YelpAction = {
  searchInfos(term, location) {
    API.searchInfos(term, location)
  }

}

export default YelpAction;
