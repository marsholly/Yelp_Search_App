const Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'vYLretnNoFr_PFeHjGHn8g',
  consumer_secret: '0aVWonu65P3WLpp6DnE-EaxgKPg',
  token: 'l166OL_V450V337vtjTQHjRYPhH3T4i3',
  token_secret: 'FqbanAWzjcb_W4Ej5QrjHYnCUF4',
});

exports.getAllInfos = (term, location, cb) => {
  yelp.search({ term: term, location: location })
    .then(data => cb(null, data))
    .catch(console.error)
}

exports.getAllBusiness = (id, cb) => {
  yelp.business(id)
    .then(data => cb(null, data))
    .catch(console.error)
}
