import { registrationSchema } from "../models/registration.models.js";
import { products } from "../database/db.js"

export async function postRegistration(req, res) {

    const { product, img, description, price, category } = req.body;
    let user = res.locals.user


    const validation = registrationSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    
    try {
        const resp = await products.insertOne({ product, img, description, price, category, id_usuario: user._id, email: user.email });
        res.status(201).send("produto cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

}