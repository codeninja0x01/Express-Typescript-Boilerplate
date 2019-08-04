"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateCartTable1556310039545 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
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
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('product_attributes');
        });
    }
}
exports.CreateCartTable1556310039545 = CreateCartTable1556310039545;
//# sourceMappingURL=1556310039548-CreateProductAttributeTable.js.map