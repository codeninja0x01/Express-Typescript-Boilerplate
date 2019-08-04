"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddProductRelationToOrderDetailTable1556353784940 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_product_order_detail',
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'product',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('order_detail', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('order_detail', this.tableForeignKey);
        });
    }
}
exports.AddProductRelationToOrderDetailTable1556353784940 = AddProductRelationToOrderDetailTable1556353784940;
//# sourceMappingURL=1556353784940-AddProductRelationToOrderDetailTable.js.map