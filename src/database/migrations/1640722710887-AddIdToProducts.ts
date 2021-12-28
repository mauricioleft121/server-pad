import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddIdToProducts1640722710887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.addColumn('products', new TableColumn({
            name: 'id',
            type: 'varchar',
            generationStrategy: 'uuid',
            isNullable: true,
            default: `uuid_generate_v4()`
        }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('products', 'id')
    }

}
