import { ObjectId } from "mongodb"
import { products } from "../database/db.js"




export async function getProducts(req, res){
    
    const category = req.query.category

    const name = req.query.name

    console.log(category)
    try {

        if(name){

            try {
                const listProductsName = await products.find({product: name}).toArray()
    
                res.send(listProductsName).status(200)

                return
            } catch (error) {

                res.send({message:'Produto não encontrado!'}).status(404)
                return
            }
        }

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


export async function getOneProduct(req, res){

    const idProduct = req.params.id

    try {
        
        const oneProduct = await products.findOne({_id: ObjectId(idProduct)})

        if(!oneProduct){
            res.status(404).send({message:'Produto não encontrado'})
            return
        }

        res.status(200).send(oneProduct)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}