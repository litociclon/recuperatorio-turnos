var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');
const turnosController = require('../controllers/turnosController');
const adminController = require("../controllers/administradorController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get("/login", adminController. login);
router.post("/login/administrador", adminController. usuario);


router.get('/login/administrador', adminController. administrador);

router.get("/login/administrador/turnos", adminController. turnos);







router.get("/nuevo-ticket", function(req, res, next){
  res.render("nuevo-ticket");
})

router.get('/users', usersController.list);

router.get('/turnos', turnosController.turnos);


module.exports = router;
