const PORT = 8000;
const http = require('http');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');

const YelpSearch = require('./models/yelpSearch');

const app = express();
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('src'));

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/yelp/:term/:location', (req, res) => {
  let { term, location } = req.params;
  YelpSearch.getAllInfos(term, location, (err, infos) => {
    if(err) return res.status(400).send(err);
    res.send(infos);
  });
});

app.get('/yelp/business/:name',(req, res) => {
  let { name } = req.params;
  YelpSearch.getAllBusiness(name, (err, business) => {
    if(err) return res.status(400).send(err);
    res.send(business);
  });
});

server.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
