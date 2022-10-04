const db = require('../database/models')


const controller = {

    index: (req, res) => {
        db.orderly_turns.findAll()
        .then(function(turnos){
            return res.render("index", {turnos})
            //res.json(turnos);
        });
    },

    login: (req, res) => {
        res.render("login");
	},

    administrador: (req, res) => {
        res.render("admin");
	},

  // turnos:  (req, res) => {
    //    res.render("turnos");
	//}

   
   /* usuario: (req, res) => {
        res.render("administrador");
    }*/
}





module.exports = controller;