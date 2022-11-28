import { shopping_cart } from "../database/db.js";
import { ObjectId } from "mongodb";

export async function delete_cart(req, res) {
    let token = req.headers.token;

    try {
        let mensage = await shopping_cart.findOne({ _id: new ObjectId(id) });
      
        if (!mensage) {
            res.status(404).send("token não encontrado!")
            return
        }
        await registro.deleteOne({ _id: ObjectId(id) });
        res.send("produto apagada com sucesso!");
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

}
