module.exports = (sequelize, dataTypes) => {
    const Users = sequelize.define("Users",{
    
            id: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            // created_at: dataTypes.TIMESTAMP,
            // updated_at: dataTypes.TIMESTAMP,
            name: {
                type: dataTypes.STRING(100),
                allowNull: false
            },
            email: {
                type: dataTypes.STRING(100),
                allowNull: false
            },
            password: {
                type: dataTypes.STRING(100),
                allowNull: false
            }
        },
         {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
        //const Users = sequelize.define(alias, cols, config);
    
        //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    
        return Users
    };