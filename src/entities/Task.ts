import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";


@Entity("tasks")
class Task {

  @PrimaryColumn()
  id: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => User)
  user: User
  
  @Column()
  user_id: string;

  @Column()
  tarefa: string;

  @Column()
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
        this.id = uuid();
    }
}

}

export {Task}

