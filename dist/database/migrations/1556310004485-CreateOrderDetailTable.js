"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateOrderDetailTable1556310004485 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'order_detail',
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
                        name: 'attribute',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'product_name',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'quantity',
                        type: 'int',
                    },
                    {
                        name: 'unit_cost',
                        type: 'double',
                    },
                    {
                        name: 'currency',
                        type: 'varchar',
                    },
                    {
                        name: 'product_id',
                        type: 'int',
                    },
                    {
                        name: 'order_id',
                        type: 'int',
                    },
                ],
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('order_detail');
        });
    }
}
exports.CreateOrderDetailTable1556310004485 = CreateOrderDetailTable1556310004485;
//# sourceMappingURL=1556310004485-CreateOrderDetailTable.js.map