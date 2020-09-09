import db from '../database/connection';
import { Request, Response } from 'express';
import comparePass from '../utils/comparePass';

export default class LoginController {

    async login(request:Request, response:Response){
        const {
            email,
            password_req
        } = request.body;

        

        const trx = await db.transaction();
        try{
        const dataUser = await trx('users').where({
            email,
        }).select('*');


        const hash = dataUser.map(item =>{
            return item.password
        });

        const validate = await comparePass(password_req as string, hash[1])

        response.json({
            validate
        })
        }catch(err){
            response.status(400).json({
                message: 'erro'
            })
        }
    }

}