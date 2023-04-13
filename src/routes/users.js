const express = require('express');
const conectarBancoDados = require('../middlewares/conectarBD');
const router = express.Router();

/* GET users listing. */
router.get('/', conectarBancoDados, function(req, res, next) {
  console.log("var:", process.env.TESTE)
  res.send('respond with a resource'+process.env.TESTE);
});

module.exports = router;
