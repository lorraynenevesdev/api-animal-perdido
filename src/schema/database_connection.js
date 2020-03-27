const sequelize_instance = require('sequelize'); 
const host = 'mysql669.umbler.com';
const port = 41890;
const user = 'erico';
const password = '92444070eol';
const database = 'angular_nodejs';

const sequelize = new sequelize_instance(
    `mysql://${user}:${password}@${host}:${port}/${database}`,{
        operatorsAliases : sequelize_instance.Op
    }
)

sequelize
    .authenticate()
    .then( ( ) => console.log( "OK" ) )
    .catch( ( ) => console.log( "ERRO" ) )

//sequelize.sync()

module.exports = sequelize