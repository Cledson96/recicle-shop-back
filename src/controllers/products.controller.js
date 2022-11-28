import { ObjectId } from "mongodb"
import { products } from "../database/db.js"




export async function getProducts(req, res) {

    const category = req.query.category

    const name = req.query.name

    try {

        if (name) {

            try {
                
                products.createIndex({ product: 'text' }, { default_language: 'pt' })

                const listProductsName = await products.find({$text:{$search:name}}).toArray()


                res.send(listProductsName).status(200)

                return
            } catch (error) {

                res.send({ message: 'Produto não encontrado!' }).status(404)
                return
            }
        }

        if (category) {
            const listProductsCategory = await products.find({ category }).toArray()

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


export async function getOneProduct(req, res) {

    const idProduct = req.params.id

    try {

        const oneProduct = await products.findOne({ _id: ObjectId(idProduct) })

        if (!oneProduct) {
            res.status(404).send({ message: 'Produto não encontrado' })
            return
        }

        res.status(200).send(oneProduct)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}


export async function deleteProduct(req, res) {

    const product = res.locals.product

    try {
        
        await products.deleteOne({_id: product._id})

        res.send('Deletado').status(200)

    } catch (error) {
        
        res.sendStatus(500)
    }
}