import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddOrderRelationToOrderDetailTable1556353796060 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_order_detail',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order_detail', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order_detail', this.tableForeignKey);
    }

}
