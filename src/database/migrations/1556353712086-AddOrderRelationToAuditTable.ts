import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddOrderRelationToAuditTable1556353712086 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_audit',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('audit', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('audit', this.tableForeignKey);
    }

}
