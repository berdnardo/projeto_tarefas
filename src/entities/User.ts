import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, OneToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { Task } from "./Task";


@Entity("users")
class User {

  @PrimaryColumn()
  id: string;

  
  @OneToMany(() => Task, task => task.tarefa)
  tarefa: Task[];

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export {User}