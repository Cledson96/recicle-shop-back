import dotenv from "dotenv";
import { MongoClient} from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
  console.log("MongoDB conectado!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("recicleShop");

export const users = db.collection("user");
export const sessao = db.collection("sessao");
export const products = db.collection("products");
export const shopping_cart = db.collection("shopping_cart");
export const sold = db.collection("send");

