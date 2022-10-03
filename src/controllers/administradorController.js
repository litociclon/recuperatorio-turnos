


const controller = {

    index: (req, res) => {
        res.render("index");
	},
    administrador: (req, res) => {
        res.render("administrador");
	},

   turnos:  (req, res) => {
        res.render("turnos");
	},

    login: (req, res) => {
        res.render("login");
	},
    usuario: (req, res) => {
        res.render("administrador");
    }
}





module.exports = controller;