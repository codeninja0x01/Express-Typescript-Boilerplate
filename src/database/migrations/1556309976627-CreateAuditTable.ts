import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAuditTable1556309976627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'audit',
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
                    name: 'message',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'code',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'created_on',
                    type: 'datetime',
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
        await queryRunner.dropTable('audit');
    }
}
