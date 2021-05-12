import { Request, Response } from "express";
import { TasksService } from "../service/TasksService";



class TasksController {

  async create(request: Request, response: Response): Promise<Response> {
    const { user_id, tarefa, done } = request.body;

    const taskService = new TasksService();

    try {
      const task = await taskService.create({user_id, tarefa, done})
      
      return response.json(task);

    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async taskDone(request: Request, response: Response) {
   const { id } = request.params;

   const taskService = new TasksService();

   const task = await taskService.taskDone(id);
   
   return response.json(task);

  }

  async findTasksByUserID(request: Request, response: Response) {
    const { id } = request.params;

    const taskService = new TasksService();

    const task = await taskService.findTasksByUserID(id);

    return response.json(task);
  }

  async findTasksNotDone(request: Request, response: Response) {
    const { id } = request.params;

    const taskService = new TasksService();
    
    const tasks = await taskService.findTasksNotDone(id);

    return response.json(tasks);
  }

}

export {TasksController}
