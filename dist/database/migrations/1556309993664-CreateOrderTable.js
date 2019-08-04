"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateOrderTable1556309993664 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'orders',
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
                        name: 'total_amount',
                        type: 'double',
                        isNullable: true,
                        default: '0.00',
                    },
                    {
                        name: 'shipped_on',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'status',
                        type: 'int',
                        default: '0',
                        isNullable: true,
                    },
                    {
                        name: 'comments',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'auth_code',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'reference',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'created_on',
                        type: 'timestamp',
                    },
                    {
                        name: 'customer_id',
                        type: 'int',
                    },
                    {
                        name: 'shipping_id',
                        type: 'int',
                    },
                    {
                        name: 'tax_id',
                        type: 'int',
                    },
                ],
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('orders');
        });
    }
}
exports.CreateOrderTable1556309993664 = CreateOrderTable1556309993664;
//# sourceMappingURL=1556309993664-CreateOrderTable.js.map