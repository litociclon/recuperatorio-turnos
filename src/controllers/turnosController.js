const db = require('../database/models')
const sequelize = db.sequelize;

module.exports = {
    index: (req, res) => {
        db.orderly_turns.findAll()
        .then(function(turnos){
            return res.render("index", {turnos})
            //res.json(turnos);
        });
    },


    list: (req, res) => {
        db.orderly_turns.findAll()
        .then(function(turnos){
            return res.render("turnos", {turnos})
            //res.json(turnos);
        });
    }
}
