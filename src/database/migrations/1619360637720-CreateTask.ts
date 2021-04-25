import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTask1619360637720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    {
                     name: "id",
                     type: "uuid",
                     isPrimary: true   
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "tarefa",
                        type: "varchar"
                    },
                    {
                        name: "done",
                        type: "boolean"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ],
                foreignKeys: [
                    {
                        name: "FKuser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks")
    }

}
