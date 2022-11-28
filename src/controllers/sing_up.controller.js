import { cadastroSchema } from "../models/cadastro.models.js";
import bcrypt from "bcrypt";
import { users } from "../database/db.js"

export async function sing_up(req, res) {

    const { name, email, password, endereco } = req.body;

    const validation = cadastroSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    const usuarios = await users.find({}).toArray();

    const verificador = usuarios.find(verifica => verifica.email === req.body.email)

    if (verificador) {
        res.status(409).send("Já existe um usuario com este email!")
        return
    }
    await users.insertOne({ name, email, senha: passwordHash, endereco });
    try {
        res.status(201).send("usuario cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

}