import { ObjectId } from "mongodb"
import { sessao, users } from "../database/db.js"

export async function validateUser(req, res, next){
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ","");
    const sessionUser = await sessao.findOne({token})

    if(!sessionUser){
        res.status(404).send({message: 'Token não encontrado'})
        return

    }

    const user = await users.findOne({_id: ObjectId(sessionUser.id)})

    if(!user){
        res.status(404).send({message: 'Usuário não encontrado'})
        return
    }

    req.user = user
    res.locals.user = user;
    
    next()
}