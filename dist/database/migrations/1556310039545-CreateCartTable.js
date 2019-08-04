"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateCartTable1556310039545 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
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
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('cart');
        });
    }
}
exports.CreateCartTable1556310039545 = CreateCartTable1556310039545;
//# sourceMappingURL=1556310039545-CreateCartTable.js.map