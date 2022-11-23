import express from "express";
import cors from "cors";
import cadastro from "./routes/cadastro.route.js";
import login from "./routes/login.route.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(cadastro);
app.use(login);

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
});