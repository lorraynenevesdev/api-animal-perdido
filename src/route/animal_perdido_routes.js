const database_sequelize = require('./../schema/database_connection');
const model = database_sequelize.import( './../schema/model/animal_perdido' ); 
const messagePadrao = 'Erro Interno no Servidor!'; 
    module.exports = {

        async get(req, res) {
            
            let animaisEncontrados = null;
            try {

                if (req.params.id == null){
                    animaisEncontrados = await model.findAll(); // busca todos os animais
                    // o metodo findAll retorna uma promise por isso e usei o await na linha acima
                } else {
                    animaisEncontrados = await model.findOne( {
                        where: {idanimal_perdido: req.params.id,
                      } } ); // Busca apenas um animal por id.             
                }

                return res.status( 200 ).json( {status : true, data : animaisEncontrados } );

            } catch(error) {
                
                return res.status( 500 ).json( { status : false, data : null, message: messagePadrao } );

            }
        },

        async post(req, res) {

            try{
                
                let AnimalInserido = await model.create( req.body )
                
                return res.status( 201 ).json( { status : true, data : AnimalInserido } );
            } catch(error) {
                
                return res.status( 500 ).json( { status : false, data : null, message: messagePadrao } );

            }
        },

        async delete(req, res){
            
            try{
                
				animaisEncontrados = await model.findOne( {
                    where: {idanimal_perdido: req.params.id,
                  } } ); // Busca apenas um animal por id. 
				
                let AnimalRemovido = await model.destroy( { where: {idanimal_perdido: req.params.id} } )
                
                return res.status( 201 ).json( { status : true, data : animaisEncontrados } );
            } catch(error) {
           
                return res.status( 500 ).json( { status : false, data : null,  message: messagePadrao } );

            }
        },
        
        async put(req, res){

            try{
                
                animaisEncontrados = await model.findOne( {
                    where: {idanimal_perdido: req.params.id,
                  } } ); // Busca apenas um animal por id. 

                let AnimalRemovido = await model.update( req.body, { where: {idanimal_perdido: req.params.id} } )
                
                return res.status( 200 ).json( { status : true, data : animaisEncontrados } );
            } catch(error) {
           
                return res.status( 500 ).json( { status : false, data : null,  message: messagePadrao } );

            }

        }
    };