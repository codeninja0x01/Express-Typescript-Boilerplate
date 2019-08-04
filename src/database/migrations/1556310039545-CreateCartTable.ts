import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCartTable1556310039545
    implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<any> {
            const table = new Table({
                name: 'cart',
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
                        name: 'cart_key',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'attribute',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'quantity',
                        type: 'int',
                    },
                    {
                        name: 'buy_now',
                        type: 'tinyint',
                        default: '1',
                    },
                    {
                        name: 'created_on',
                        type: 'timestamp',
                    },
                    {
                        name: 'product_id',
                        type: 'int',
                    },
                ],
            });
            await queryRunner.createTable(table);
        }

        public async down(queryRunner: QueryRunner): Promise<any> {
            await queryRunner.dropTable('cart');
        }
}
