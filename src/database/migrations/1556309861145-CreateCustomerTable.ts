import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCustomerTable1556309861145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'customer',
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
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'address_1',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'address_2',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'city',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'region',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'postal_code',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'country',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'day_phone',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'eve_phone',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'mob_phone',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'credit_card',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'shipping_region_id',
                    type: 'int',
                    isNullable: true,
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('customer');
    }
}
