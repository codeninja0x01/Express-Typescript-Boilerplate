import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddTaxRelationToOrderTable1556353743895 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_tax_order',
        columnNames: ['tax_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tax',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('orders', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('orders', this.tableForeignKey);
    }

}
