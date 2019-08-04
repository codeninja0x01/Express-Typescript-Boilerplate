import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddCustomerRelationToReviewTable1556353625301 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_customer_review',
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'customer',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('review', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('review', this.tableForeignKey);
    }

}
