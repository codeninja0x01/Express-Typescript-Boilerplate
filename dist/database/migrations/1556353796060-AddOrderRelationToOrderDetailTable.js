"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddOrderRelationToOrderDetailTable1556353796060 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_order_order_detail',
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
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
exports.AddOrderRelationToOrderDetailTable1556353796060 = AddOrderRelationToOrderDetailTable1556353796060;
//# sourceMappingURL=1556353796060-AddOrderRelationToOrderDetailTable.js.map