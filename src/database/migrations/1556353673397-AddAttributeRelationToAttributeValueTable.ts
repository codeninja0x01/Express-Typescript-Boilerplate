import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddAttributeRelationToAttributeValueTable1556353673397 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_attribute_attribute_value',
        columnNames: ['attribute_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'attribute',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('attribute_value', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('attribute_value', this.tableForeignKey);
    }

}
