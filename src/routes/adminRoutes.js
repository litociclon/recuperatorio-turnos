var express = require('express');
var router = express.Router();
const adminController = require("../controllers/administradorController");

router.get('/turnos', adminController. index);

//router.get('/login', adminController. login);



//router.get('/', adminController. index );

//router.get('/administrador.ejs', adminController. administrador);

//router.get("/administrador/turnos", adminController. turnos);
  


module.exports = router;
