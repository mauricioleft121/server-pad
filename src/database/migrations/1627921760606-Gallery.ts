import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Gallery1627921760606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'gallery',
                columns: [
                    {
                        name: 'nome',
                        type: 'varchar',
                        isNullable: false,
                        isPrimary: true,
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                        isNullable: false,
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('gallery')
    }

}
