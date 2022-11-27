import joi from "joi";

export const registrationSchema = joi.object({
    product: joi.string().required().min(2).max(50),
    img: joi.string().required(),
    description: joi.string().min(3).max(100).required(),
    price: joi.number().required(),
    category: joi.string().required().min(0).max(100)
});

