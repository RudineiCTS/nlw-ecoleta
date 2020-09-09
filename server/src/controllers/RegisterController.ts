import db from '../database/connection';
import {Request, Response} from 'express';
import cripterPass from '../utils/cripterPass';


export default class RegisterController {

    async create(request:Request,  response:Response){
        const {
            email,
            password_req,
            name_req,
            lastName
        } = request.body

        const hash = await cripterPass(password_req as string);
        const name = `${name_req} ${lastName}` 
        const trx = await db.transaction();
        const user = await trx('users').select("*")

        try{
            if(await user.find)
          
                await trx('users').insert({
                    name,
                    email,
                    password:hash
                })

                await trx.commit();
          
                return(
                    response.status(201).json({
                       name,
                       email,
                       hash
                    })
                );
            


        }catch(err){
            return(
            response.status(400).json({
                message:'error: verifique os seus dados'
            })
            );
        }
    }
}