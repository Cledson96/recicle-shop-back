import { shopping_cart } from "../database/db.js"
import { products } from "../database/db.js"
import { ObjectId } from "mongodb";

export async function postShopping_cart(req, res) {

    let user = res.locals.user


    if(!req.body.id){
        res.status(409).send("Precisar enviar um ID do produto !");
        return
    }

    let verificador = await products.findOne({ _id: new ObjectId(req.body.id)});


    if (!verificador) {
        res.status(409).send("Precisar enviar um ID do produto valido!");
        return
    }
    const verifica_repetido = await shopping_cart.findOne({$and:[
        {_id: verificador._id},
        {cartUserId: user._id}
    ] });
        
    if (verifica_repetido) {
        res.status(409).send("Já existe este produto no carrinho!");
        return
    }

    try {
        shopping_cart.insertOne({...verificador, cartUserId: user._id});
        res.status(201).send({...verificador, cartUserId: user._id});
    } catch (err) {
        console.log(user)
        res.status(500).send(err);
    }

}