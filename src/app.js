import express from "express";
import cors from "cors";
import sing_up from "./routes/sing_up.route.js";
import sing_in from "./routes/sing_in.route.js";
import products from './routes/products.route.js'
import registration from './routes/registration.route.js'


const app = express();

app.use(express.json());
app.use(cors());
app.use(sing_up);
app.use(sing_in);
app.use(products);
app.use(registration);


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
});