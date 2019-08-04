"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddShippingRelationToOrderTable1556353752133 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_shipping_order',
            columnNames: ['shipping_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'shipping',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('orders', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('orders', this.tableForeignKey);
        });
    }
}
exports.AddShippingRelationToOrderTable1556353752133 = AddShippingRelationToOrderTable1556353752133;
//# sourceMappingURL=1556353752133-AddShippingRelationToOrderTable.js.map