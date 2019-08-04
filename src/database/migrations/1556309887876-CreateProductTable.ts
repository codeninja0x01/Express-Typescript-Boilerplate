import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductTable1556309887876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'product',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'price',
                    type: 'double',
                },
                {
                    name: 'discounted_price',
                    type: 'double',
                    default: '0.00',
                    isNullable: true,
                },
                {
                    name: 'image_1',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'image_2',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'thumbnail',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'display',
                    type: 'tinyint',
                    default: '0',
                },
            ],
            indices: [
                {
                    columnNames: ['name', 'description'],
                    isFulltext: true,
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('product');
    }
}
