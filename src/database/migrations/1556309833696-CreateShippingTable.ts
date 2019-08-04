import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateShippingTable1556309833696 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'shipping',
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
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'cost',
                    type: 'double',
                },
                {
                    name: 'shipping_region_id',
                    type: 'int',
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('shipping');
    }
}
