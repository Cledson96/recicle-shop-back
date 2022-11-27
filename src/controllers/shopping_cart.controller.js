import { shopping_cart } from "../database/db.js"
import { products } from "../database/db.js"
import { ObjectId } from "mongodb";

export async function postShopping_cart(req, res) {

    let user = res.locals.user
    if(!req.body.id){
        res.status(409).send("Precisar enviar um ID do produto !");
    }

    let verificador = await products.findOne({ _id: new ObjectId(req.body.id)});
    console.log(verificador)

    if (!verificador) {
        res.status(409).send("Precisar enviar um ID do produto valido!");
    }
    console.log(verificador)
    const verifica_repetido = await shopping_cart.findOne({ _id: new ObjectId(verificador._id)});;
    if (verifica_repetido) {
        res.status(409).send("Já existe este produto no carrinho!");
        return
    }
    console.log(verifica_repetido)

    try {
        shopping_cart.insertOne(verificador);
        res.status(201).send("produto inserido com sucesso!");
    } catch (err) {
        console.log(user)
        res.status(500).send(err);
    }

}