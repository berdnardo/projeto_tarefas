import { getCustomRepository, Repository } from "typeorm";
import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";


interface ITaskCreate {
  user_id: string;
  tarefa: string;
  done: boolean;
}

class TasksService {

  private taskRepository: Repository<Task>

  constructor () {
    this.taskRepository = getCustomRepository(TaskRepository);
  }

  async create({user_id, tarefa, done }: ITaskCreate) {

    const task = this.taskRepository.create({
      user_id,
      tarefa,
      done
    });

    await this.taskRepository.save(task);

    return task;
  }

  async taskDone(id: string) {

    const task = await this.taskRepository.update(id, {done: true});

    return task;    
  }

  async findTasksByUserID(user_id: string) {

    const task = await this.taskRepository.find({
      where: {user_id}
    });

    return task;
  }

  async findTasksNotDone(user_id: string) {

    const tasks = await this.taskRepository.find({
      where: {
        user_id,
        done: false
      },
      order: {
        created_at: "DESC"
      }
    })
    return tasks;
  }


}


export {TasksService}
