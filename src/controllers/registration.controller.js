import { registrationSchema } from "../models/registration.models.js";
import { products } from "../database/db.js"

export async function postRegistration(req, res) {

    const { product, img, description, price, category } = req.body;
    let user = res.locals.user

let categorias = ["decoration","furniture","clothes","toys","eletronics"];

    const validation = registrationSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    validateCategory = categorias.find((ref)=> ref == category);
    if(!validateCategory){
        res.status(422).send("categoria invalida!");
        return
    }
 
    try {
        await products.insertOne({ product, img, description, price,category,id_usuario: user.id,email:user.email});
        res.status(201).send("produto cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

}