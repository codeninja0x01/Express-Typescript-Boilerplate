import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReviewTable1556309876462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'review',
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
                    name: 'review',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'rating',
                    type: 'int',
                },
                {
                    name: 'created_on',
                    type: 'timestamp',
                },
                {
                    name: 'product_id',
                    type: 'int',
                },
                {
                    name: 'customer_id',
                    type: 'int',
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('review');
    }
}
