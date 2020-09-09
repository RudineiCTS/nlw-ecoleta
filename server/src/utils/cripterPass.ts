import bcrypt, { hash } from 'bcrypt';


const saltRound = 10
export default async function criperPass(password:string){
   
    const hash= await bcrypt.hash(password, saltRound);
    return hash;
}