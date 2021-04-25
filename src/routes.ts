import { request, response, Router } from "express";
import { UsersController } from "./controllers/UsersController";

const route = Router();

const usersController = new UsersController();

route.get('/', (request, response) => {
  response.send('<h1>ok</h1>')
});

route.post("/users", usersController.create);
route.get("/users/:email", usersController.findByEmail);
route.delete("/users/:id", usersController.deleteUserByID);

export {route}