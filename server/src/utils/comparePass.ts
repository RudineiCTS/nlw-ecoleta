import bcrypt from 'bcrypt';

export default async function comparePass(password:string, hash: string){
     const validation = await bcrypt.compare(password, hash);
     return validation;
    
}