import { sold } from "../database/db.js"

import { shopping_cart } from "../database/db.js";

export async function solds (req, res) {

    let user = res.locals.user

    let registros 
    try {
        registros = await shopping_cart.find({ email: user.email }).toArray();
    } catch (err) {
        res.status(500).send(err);
    }

    if (!registros || registros.length === 0) {
        res.status(409).send("Não há itens no carrinho!");
        return
    }

    const compra = {
        "email" : user.email,
        "produto": registros,
        "forma de pagamento" : req.body.pagamento

    }

   
        
    try {
        const resp = await sold.insertOne(compra);
        res.status(201).send("produto vendido com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

   

}