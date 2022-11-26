import { products } from "../database/db.js"




export async function getProducts(req, res){
    
    const category = req.query.category

    console.log(category)
    try {

        if(category){
            const listProductsCategory= await products.find({category}).toArray()

            res.send(listProductsCategory).status(200)
            
            return
        }

        const listProducts = await products.find().toArray()
        
        res.status(200).send(listProducts)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}