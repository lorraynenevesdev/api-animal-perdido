const sequelize_instance = require('sequelize'); 
const host = 'ec2-52-200-119-0.compute-1.amazonaws.com';
const port = 5432;
const user = 'omdihiwudnswku';
const password = '790f2a36363d30463c6a6a1a1422bb9530f91a873635a36140b6ca04f1577790';
const database = 'd3h1e6gli70da7';

// const sequelize_instance = require('sequelize'); 
// const host = 'mysql669.umbler.com';
// const port = 41890;
// const user = 'lorrayne';
// const password = '92444070eol';
// const database = 'angular_nodejs';

const sequelize = new sequelize_instance(
    `postgres://${user}:${password}@${host}:${port}/${database}`,{
        operatorsAliases : sequelize_instance.Op
    }
)

sequelize
    .authenticate()
    .then( ( ) => console.log( "OK" ) )
    .catch( ( error ) => console.log( "ERRO", error ) )

//sequelize.sync()

module.exports = sequelize