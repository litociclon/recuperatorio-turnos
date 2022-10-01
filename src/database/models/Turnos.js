module.exports = (sequelize, dataTypes) => {
    const turnos = sequelize.define("orderly_turns",{
    
            id: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },

            code: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                allowNull: false,
            
            },

            box: {
                type: dataTypes.BIGINT(10).UNSIGNED,
                allowNull: false,
            
            }
         },
         {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at'
        });
        //const Users = sequelize.define(alias, cols, config);
    
        //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    
        return turnos
    };