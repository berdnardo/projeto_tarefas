
import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"



interface IUserCreate {
  name: string;
  email: string;
}


class UsersService {

  private usersRepository: Repository<User>;

  constructor () {
    this.usersRepository = getCustomRepository(UserRepository);
  }

  // Cria o usuário no DB.
  async create({name, email}: IUserCreate) {

    // Verifica se existe o usuário.
    const userExists = await this.usersRepository.findOne({
      email
    });

    // Se existir, retorna o usuário.
    if (userExists) {
      return userExists
    }

    // Não existindo salva no DB.
    const user = this.usersRepository.create({
      name,
      email
    })

    await this.usersRepository.save(user);

    return user;
  }

  // Procura o usuário no DB pelo email.
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }

  // Deleta o usuário pelo ID.
  async deleteUserByID(id: string) {
    const user = this.usersRepository.delete(id).catch(error => console.log(error));
    
    return user
  }



}


export {UsersService}

