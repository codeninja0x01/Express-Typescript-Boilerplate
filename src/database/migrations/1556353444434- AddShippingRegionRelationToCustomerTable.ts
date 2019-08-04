import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddShippingRegionRelationToCustomerTable1556353444434 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_shipping_region_customer',
        columnNames: ['shipping_region_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'shipping_region',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('customer', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('customer', this.tableForeignKey);
    }

}
