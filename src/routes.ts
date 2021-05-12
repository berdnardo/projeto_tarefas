import { request, response, Router } from "express";
import { TasksController } from "./controllers/TasksController";
import { UsersController } from "./controllers/UsersController";

const route = Router();

const usersController = new UsersController();
const tasksController = new TasksController();

route.get('/', (request, response) => {
  response.send('<h1>ok</h1>')
});

route.post("/users", usersController.create);
route.get("/users/:email", usersController.findByEmail);
route.delete("/users/:id", usersController.deleteUserByID);
route.get("/users", usersController.findAllUsers);

route.post("/tasks", tasksController.create);
route.get("/tasks/:id", tasksController.findTasksByUserID);
route.put("/tasks/:id", tasksController.taskDone);
route.get("/notdone/:id", tasksController.findTasksNotDone);

export {route}