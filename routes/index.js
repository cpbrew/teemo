'use strict';

let express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // jshint unused: false
  res.render('index', { title: 'Express' });
});

module.exports = router;
