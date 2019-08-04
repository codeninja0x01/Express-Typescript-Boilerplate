import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDepartmentTable1556309788436 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'department',
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
                    isNullable: true,
                },
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('department');
    }
}
