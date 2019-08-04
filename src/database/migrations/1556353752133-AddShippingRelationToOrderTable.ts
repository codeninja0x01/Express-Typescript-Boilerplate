import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddShippingRelationToOrderTable1556353752133 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_shipping_order',
        columnNames: ['shipping_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'shipping',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('orders', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('orders', this.tableForeignKey);
    }

}
