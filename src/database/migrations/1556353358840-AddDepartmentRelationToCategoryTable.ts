import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddDepartmentRelationToCategoryTable1556353358840 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_department_category',
        columnNames: ['department_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'department',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('category', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('category', this.tableForeignKey);
    }

}
