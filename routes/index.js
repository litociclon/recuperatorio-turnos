var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/publico", function(req, res, next){
  res.render("publico");
})

router.get("/nuevo-ticket", function(req, res, next){
  res.render("nuevo-ticket");
})
module.exports = router;
