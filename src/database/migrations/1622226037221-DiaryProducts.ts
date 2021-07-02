import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class DiaryProducts1622226037221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'diaryproducts',
                columns: [
                    {
                        name: 'imagem',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        isNullable: false,
                        isPrimary: true,
                    },
                    {
                        name: 'descricao',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'valor',
                        type: 'decimal',
                        isNullable: false,
                        precision: 10,
                        scale: 2,
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('diaryproducts')
    }

}
