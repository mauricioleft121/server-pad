import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class BannerImage1622053055949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'banner',
                columns: [
                    {
                        name: 'imagem',
                        type: 'varchar',
                        isNullable: false,
                        isPrimary: true
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        isNullable: false,
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('banner')
    }

}
