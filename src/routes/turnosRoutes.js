var express = require('express');
var router = express.Router();

const turnosController = require('../controllers/usersController');

//router.get("/", usersController. index )
router.get('/turnos', turnosController. index);

module.exports = router;