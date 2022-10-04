var express = require('express');
var router = express.Router();

const indexController = require("../controllers/indexController");

const turnosController = require('../controllers/turnosController');
const adminController = require("../controllers/administradorController");
const usersController = require('../controllers/usersController');



router.get('/', indexController. index);

router.get("/login", adminController. login);
router.post("/admin", adminController. administrador );


//router.get('/administrador', adminController. administrador);

//router.get("/admin/turnos", adminController. turnos);

router.get("/admin/turnos", turnosController. list )





/*router.get("/nuevo-ticket", function(req, res, next){
  res.render("nuevo-ticket");
})

router.get('/users', usersController.list);*/




module.exports = router;
