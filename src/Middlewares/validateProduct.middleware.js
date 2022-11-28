import { products } from "../database/db.js"
import { ObjectId } from "mongodb"

export async function validateProduct(req, res, next){

    let user = res.locals.user
    const {id} = req.params

    const product = await products.findOne({_id: ObjectId(id)})

    if(!product){
        res.send({message:'Item não encontrado'}).status(404)
        return
    }

    if(!product.id_usuario.equals(user._id)){
        res.send({message:'Usuários diferentes'})
        return
    }

    res.locals.product = product

    next()
}