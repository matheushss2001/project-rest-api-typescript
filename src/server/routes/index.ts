import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();// instanciando o objeto do Tipo Router (rota)

// criando uma nova toda com a função get
router.get('/', (_, res) => { // criou o endpoint
    return res.send("Olá, DEV!");
});

router.post(

    '/teste',

    (req,res) => { /// criou uma nova rota
        //console.log(req);
        return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
    }

);

export { router };
