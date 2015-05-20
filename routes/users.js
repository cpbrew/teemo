'use strict';

let express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // jshint unused: false
  res.send('respond with a resource');
});

module.exports = router;
