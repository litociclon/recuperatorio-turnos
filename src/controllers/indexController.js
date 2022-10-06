const db = require('../database/models')

const controller = {
    index: (req, res) => {
        db.orderly_turns.findAll({
            order: [["code", "desc"]],
            limit: 3
        })
        .then(function(turnos){
            return res.render("index", { turnos })
        })
    },
    /*(req, res) => {
        db.orderly_turns.findAll()
        .then(function(turnos){
            return res.render("index", {turnos})
            //res.json(turnos);
        });
    },*/
   /* index: (req, res) => {
        res.render("index");
	}*/
    /*list: (req, res) => {
        db.Users.findAll()
        .then(function(users){
            res.json(users);
        });
    }*/
}

module.exports = controller;