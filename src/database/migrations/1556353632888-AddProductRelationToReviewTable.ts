import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddProductRelationToReviewTable1556353632888 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_review',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('review', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('review', this.tableForeignKey);
    }

}
