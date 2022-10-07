var express = require('express');
var router = express.Router();

const turnosController = require('../../controllers/api/apiTurnosController');

router.get("/", turnosController. list )
router.post("/create", turnosController. create)

router.get("/detail/:id", turnosController. detail )
//router.get("/admin/turnos/turnoId/:id", turnosController.delete);
router.delete("/admin/turnos/turnoId/:id", turnosController.destroy);

module.exports = router;