import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddProductRelationToCartTable1556353830477 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_cart',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('cart', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('cart', this.tableForeignKey);
    }

}
