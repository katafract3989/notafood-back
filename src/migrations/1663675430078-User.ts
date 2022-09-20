import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm"

export class User1663675430078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "first_name",
                        type: "varchar",
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "role",
                        type: "int",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )


        // await queryRunner.createForeignKey(
        //     "categories",
        //     new TableForeignKey({
        //         columnNames: ["restaurantId"],
        //         referencedColumnNames: ["id"],
        //         referencedTableName: "restaurants",
        //         onDelete: "CASCADE",
        //     }),
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
