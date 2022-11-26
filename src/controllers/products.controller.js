import { products } from "../database/db.js"




export async function getProducts(req, res){
    

    try {
        const listProducts = await products.find().toArray()
        res.status(200).send(listProducts)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}