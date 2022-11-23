import joi from "joi";

export const loginSchema = joi.object({
    password: joi.string().min(3).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: joi.string().min(3).required().email()
});

