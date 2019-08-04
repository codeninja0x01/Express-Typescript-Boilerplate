import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCartTable1556310039545
    implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<any> {
            const table = new Table({
                name: 'product_attributes',
                columns: [
                    {
                        name: 'product_id',
                        type: 'int',
                    },
                    {
                        name: 'attribute_value_id',
                        type: 'int',
                    },
                ],
            });
            await queryRunner.createTable(table);
        }

        public async down(queryRunner: QueryRunner): Promise<any> {
            await queryRunner.dropTable('product_attributes');
        }
}
