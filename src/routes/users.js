var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("var:", process.env.TESTE)
  res.send('respond with a resource'+process.env.TESTE);
});

module.exports = router;
