import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';

const router = Router();// instanciando o objeto do Tipo Router (rota)

// criando uma nova rota com a função get
router.get('/', (_, res) => { // criou o endpoint
    return res.send("Olá, DEV!");
});


// rota para cidade
router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);

export { router };
