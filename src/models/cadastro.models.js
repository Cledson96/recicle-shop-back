import joi from "joi";

export const cadastroSchema = joi.object({
    name: joi.string().required().min(2).max(50),
    password: joi.string().required().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: joi.string().min(3).required().email(),
    endereco: joi.string().required().min(8).max(100)
});

