import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from  'yup';
import { validation } from '../../shared/middleware';

// interface da cidade
interface ICidade{
    nome:string;
    uf:string;
}


/// MIDDLEWARE

//VALIDAÇÃO DOS DADOS DO OBJETO
// interface da cidade
interface IFilter{
    filter?: string;
}


/// MIDDLEWARE

export const createValidation = validation((getSchema) => ({

    body: getSchema<ICidade>(
        yup.object().shape({
        nome: yup.string().required().min(3),
        uf: yup.string().required().max(3)
    })
    ),

    query: getSchema<IFilter>(
        yup.object().shape({
        filter: yup.string().required().min(3),
    })
    ),

}));



// faz o insert das informações requisitadas 
export const create = async (req: Request<{},{},ICidade>, res: Response) => {

    //declara uma variável do tipo ICidade ou undefined
    let validatedData: ICidade | undefined = undefined;

    

    console.log(req.body);
    
    return res.send("Create!");
};