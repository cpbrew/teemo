'use strict';

let express = require('express'),
    lol = require('leagueapi'),
    config = require('config'),
    pih = require('../helpers/profileIconHelper'),
    router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // jshint unused: false
  res.redirect(req.baseUrl + '/' + req.query.summonerName);
});

router.get('/:summonerName', (req, res, next) => {
  // jshint unused: false
  let summonerName = decodeURI(req.params.summonerName),
      standardizedSummonerName = summonerName.toLowerCase().replace(/\s/g, '');

  lol.Summoner.getByName(standardizedSummonerName)
  .then((data) => {
    let summoner = data[standardizedSummonerName];
    
    if (!summoner) {
      next();
    } else {
      res.render('summoner', {
        title: summoner.name + ' on Teemo!',
        summonerName: summoner.name,
        summonerLevel: summoner.summonerLevel,
        iconUrl: pih.urlForIcon(summoner.profileIconId)
      });
    }
  })
  .catch(next);
});

lol.init(config.get('apiKey'));
lol.Static.getRealm()
.then(pih.init);

module.exports = router;
