import express from "express";
import { createConnection } from "typeorm";
import { route } from "./routes";
import cors from "cors";




const app = express();


// Como criei o arquivo ormconfig.json posso iniciar a conexão com 
// o DB sem passar nenhum parâmetro.
createConnection()

app.use(cors())

app.use(express.json());

app.use(route);

app.listen(3333, () => console.log("Server is running on port 3333") );
