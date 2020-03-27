const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000; //porta padrão

const rotasAnimalPerdido = require('./src/route/animal_perdido_routes');
const rotasUploadFile = require('./src/route/upload_file_routes');

//configurando o body parser para pegar POSTS mais tarde
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

//definindo as rotas
const router = express.Router();
app.use('/', router);

router.post('/upload-file', rotasUploadFile.post);
router.post('/animal-perdido', rotasAnimalPerdido.post);
router.get('/animal-perdido/:id?', rotasAnimalPerdido.get);
router.put('/animal-perdido/:id', rotasAnimalPerdido.put);
router.delete('/animal-perdido/:id', rotasAnimalPerdido.delete);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');
