import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddShippingRegionRelationToShippingTable1556353409410 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_shipping_region_shipping',
        columnNames: ['shipping_region_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'shipping_region',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('shipping', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('shipping', this.tableForeignKey);
    }

}
