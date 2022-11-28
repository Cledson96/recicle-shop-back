import { shopping_cart } from "../database/db.js";
import { ObjectId } from "mongodb";

export async function delete_cart(req, res) {
    let id = req.headers.id;

    try {
        let produto = await shopping_cart.findOne({ _id: new ObjectId(id) });
      
        if (!produto) {
            res.status(404).send("produto não encontrado!")
            return
        }
        
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

    try {
       const resp = await shopping_cart.deleteOne({ _id: ObjectId(id) });
        res.send("produto apagado com sucesso!");
    }catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}
