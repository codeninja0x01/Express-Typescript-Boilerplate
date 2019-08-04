import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderTable1556309993664 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {

        const table = new Table({
            name: 'orders',
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
                    name: 'total_amount',
                    type: 'double',
                    isNullable: true,
                    default: '0.00',
                },
                {
                    name: 'shipped_on',
                    type: 'date',
                    isNullable: true,
                },
                {
                    name: 'status',
                    type: 'int',
                    default: '0',
                    isNullable: true,
                },
                {
                    name: 'comments',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'auth_code',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'reference',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'created_on',
                    type: 'timestamp',
                },
                {
                    name: 'customer_id',
                    type: 'int',
                },
                {
                    name: 'shipping_id',
                    type: 'int',
                },
                {
                    name: 'tax_id',
                    type: 'int',
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('orders');
    }
}
