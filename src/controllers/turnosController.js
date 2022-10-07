const db = require('../database/models')
const sequelize = db.sequelize;

module.exports = {
    index: (req, res) => {
        db.orderly_turns.findAll()
        .then(function(turnos){
            //return res.render("index", {turnos})
            res.json(turnos);
        });
    },


    list: (req, res) => {
        db.orderly_turns.findAll()
        .then(function(turnos){
            return res.render("turnos", {turnos})
            //res.json(turnos);
        });
    },

    create: (req, res) => {
        //recibe la info de un turno nuevo
        db.orderly_turns.create({
            code: req.body.code,
            box: req.body.box,
           
        })
        .then(function(){
            return res.redirect("turnos")
        })
    },

    detail: (req, res) => {
        const id = req.params.id;
        db.orderly_turns.findByPk(id)
        .then(function(turno){
            return res.render("turnoId", { turnos: turno })
        })
    },

   /* delete: (req, res) => {
        db.orderly_turns.findByPk(req.params.id)
        .then(function(turnos){
            return res.render("turnoId", {turnos });
        })
    },*/
    

    destroy: (req, res) => {
        const id = req.params.id;
        db.orderly_turns.destroy({ where: { id }})
        .then(function(){
            return res.redirect("/admin/turnos");
        })
    }

 
}
