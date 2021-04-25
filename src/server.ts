import express from "express";
import { route } from "./routes";
const app = express();


app.use(route);
app.use(express.json());
app.listen(3333, () => console.log("Server is running on port 3333") );