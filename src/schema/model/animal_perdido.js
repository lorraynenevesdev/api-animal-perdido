
const database_sequelize = require('../database_connection'); 

module.exports = ( database_sequelize, DataTypes ) => { 
    return  database_sequelize.define( 'animal_perdido', { 
        idanimal_perdido : { 
            type: DataTypes.INTEGER,
            primaryKey : true, 
            autoIncrement : true
        },
        especie : DataTypes.STRING( 45 ),
        caracteristicas_fisicas : DataTypes.STRING,
        foto : DataTypes.STRING( 255 ),
        quando : DataTypes.DATE, 
        onde : DataTypes.STRING( 255 ) 
    }, {
        freezeTableName : true,
        timestamps : false
        
    } ); 
    
 }