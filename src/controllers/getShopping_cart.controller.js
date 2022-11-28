import { shopping_cart } from "../database/db.js";

export async function getShopping_cart (req,res){
    let user = res.locals.user
     
    const registros =  await shopping_cart.find({ cartUserId: user._id}).toArray();

    try {
        res.status(200).send(registros);
    } catch (err) {
        res.status(500).send(err);
    }

}