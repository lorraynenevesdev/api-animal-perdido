const database_sequelize = require('./../schema/database_connection');
const model = database_sequelize.import( './../schema/model/animal_perdido' ); 
const fs = require('fs'); 
const messagePadrao = 'Erro Interno no Servidor!'; 
const IncomingForm = require('formidable').IncomingForm; 

    module.exports = {

        post(req, res) {

            try{
				
				var form = new IncomingForm(); 
				let nomePublicArquivo = ''; 

				let promessa = new Promise((resolve, reject) => {
					
					form.on('file', (field, file) => {
						
						let originalName = file.name; // "imagem.jpg"
						let originalNamePartido = originalName.split('.'); // ['imagem', 'jpg'] 
						let extensionFile = originalNamePartido[ originalNamePartido.length - 1 ]; 
						nomePublicArquivo =  `./public/fotos/` + new Date().getTime() + `.${extensionFile}`;
						
						if (fs.existsSync(file.path)) { 
						  
						  fs.readFile(file.path, (err, data) => {
							if (err) {
								reject(err); 
							}

							if (!err){
								fs.writeFileSync(nomePublicArquivo, data); 
								nomePublicArquivo = nomePublicArquivo.replace('./public/', '/'); 
								resolve(nomePublicArquivo); 
							}
						});
						}
											 
					}); 
				
					form.parse(req); 
					 
					
				} ); 
				
				promessa.then( ( arquivo ) => {
					
					console.log(arquivo) 
					return res.status( 201 ).json( { status : true, data : { arquivo: arquivo } } );
					
				}); 
				
				 
                
            } catch(error) {
                
                return res.status( 500 ).json( { status : false, data : null, message: messagePadrao } );

            }
        }
    };