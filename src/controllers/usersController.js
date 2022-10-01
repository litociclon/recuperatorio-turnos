const db = require('../database/models')
const sequelize = db.sequelize;

module.exports = {
    list: (req, res) => {
        db.Users.findAll()
        .then(function(users){
            res.json(users);
        });
    }
}