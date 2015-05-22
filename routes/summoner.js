'use strict';

let express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // jshint unused: false
  res.redirect(req.baseUrl + '/' + req.query.summonerName);
});

router.get('/:summonerName', (req, res, next) => {
  // jshint unused: false
  res.render('summoner', {
    title: req.params.summonerName + ' on Teemo!',
    summonerName: req.params.summonerName,
    summonerLevel: 30,
    iconUrl: '../images/error.png'
  });
});

module.exports = router;
