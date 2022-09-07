import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm"

export class Categories1662533904267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "restaurantId",
                        type: "int",
                    }
                ],
            }),
            true,
        )


        await queryRunner.createForeignKey(
            "categories",
            new TableForeignKey({
                columnNames: ["restaurantId"],
                referencedColumnNames: ["id"],
                referencedTableName: "restaurants",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
