const { rmSync } = require('fs');
const db = require('../../database/models')
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
        .then(turnos => {
            return res.status(200).json({ 
                meta: {
                    code: res.statuscode,
                    total: turnos.length,
                    url: req.protocol + "://" + req.get("hots") + req.originalUrl
                },
                data: turnos
            })
        
            })
    },

    create:  (req,res) => {
         db.orderly_turns.create({
            code: req.body.code,
            box: req.body.box,
           
        })
        .then((turnos) => {
            return res.status(201).json({
                meta:{
                    code: res. statuscode,
                    url: req.protocol + "://" + req.get("hots") + req.originalUrl
                },
                data: turnos
        })  })
        .catch(error => res.send(error))
    },

    detail: (req, res) => {
        const id = req.params.id;
        db.orderly_turns.findByPk(id)
        .then(turno => {
            return res.status(200).json({ 
                meta: {
                    code: res.statuscode,
                    url: req.protocol + "://" + req.get("hots") + req.originalUrl
                },
                data: turno
            })
        
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