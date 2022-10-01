const db = require('../database/models')
const sequelize = db.sequelize;

module.exports = {
    turnos: (req, res) => {
        db.orderly_turns.findAll()
        .then(function(turnos){
            res.json(turnos);
        });
    }
}
