import { loginSchema } from "../models/login.models.js";
import bcrypt from "bcrypt";
import { users } from "../database/db.js"
import { v4 } from "uuid";
import { sessao } from "../database/db.js"
import dayjs from "dayjs";

export async function login(req, res) {
    const { email, password } = req.body;

    const validation = loginSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    const token = v4();
    try {
        const cadastrado = await users.findOne({ email });

        if (!cadastrado) {
            return res.status(401).send("usuario não cadastrado!");
        }
        const senha = bcrypt.compareSync(password, cadastrado.senha);

        if (!senha) {
            return res.status(401).send("Senha incorreta!");
        }

        const sessaoativa = await sessao.findOne({ id: cadastrado._id });

        res.locals.usuario = sessaoativa;

        if (sessaoativa) {
            console.log(sessaoativa)
            return res.send({ token: sessaoativa.token, name: cadastrado.name });

        }
        sessao.insertOne({ token, id: cadastrado._id, email ,data:dayjs().format("DD/MM/YYYY")});

        res.send({ token, name: cadastrado.name });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};