var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
const turnosController = require('../controllers/turnosController');

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

router.get('/users', usersController.list);

router.get('/turnos', turnosController.turnos);


module.exports = router;
