import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddCustomerRelationToOrderTable1556353761321 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_customer_order',
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'customer',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('orders', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('orders', this.tableForeignKey);
    }
}
