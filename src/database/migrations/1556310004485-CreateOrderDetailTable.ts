import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderDetailTable1556310004485 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'order_detail',
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
                    name: 'attribute',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'product_name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'quantity',
                    type: 'int',
                },
                {
                    name: 'unit_cost',
                    type: 'double',
                },
                {
                    name: 'currency',
                    type: 'varchar',
                    default: "'USD'",
                },
                {
                    name: 'product_id',
                    type: 'int',
                },
                {
                    name: 'order_id',
                    type: 'int',
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('order_detail');
    }
}
