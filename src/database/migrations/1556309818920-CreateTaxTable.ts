import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTaxTable1556309818920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'tax',
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
                    length: '255',
                },
                {
                    name: 'percentage',
                    type: 'double',
                    default: '0.00',
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('tax');
    }
}
