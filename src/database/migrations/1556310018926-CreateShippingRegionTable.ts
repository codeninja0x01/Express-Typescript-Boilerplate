import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateShippingRegionTable1556310018926
    implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<any> {
            const table = new Table({
                name: 'shipping_region',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        length: '255',
                    },
                ],
            });
            await queryRunner.createTable(table);
        }

        public async down(queryRunner: QueryRunner): Promise<any> {
            await queryRunner.dropTable('shipping_region');
        }
}
