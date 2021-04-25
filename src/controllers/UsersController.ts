import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";

class UsersController {

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email} = request.body;
    

    const usersService = new UsersService();

    try {
      const user = await usersService.create({name, email});

    return response.json(user);

    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }

    
  }

  async findByEmail(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const usersService = new UsersService();

    const user = await usersService.findByEmail(email);

    return response.json(user);
  }

  async deleteUserByID(request: Request, response: Response) {
    const {id} = request.params;

    const usersService = new UsersService();

    const user = await usersService.deleteUserByID(id);

    response.json(user);
  }
}



export {UsersController}
