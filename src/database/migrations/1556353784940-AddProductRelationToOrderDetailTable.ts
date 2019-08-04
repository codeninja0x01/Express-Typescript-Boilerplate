import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddProductRelationToOrderDetailTable1556353784940 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_order_detail',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order_detail', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order_detail', this.tableForeignKey);
    }

}
