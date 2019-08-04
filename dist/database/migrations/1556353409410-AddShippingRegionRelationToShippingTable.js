"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddShippingRegionRelationToShippingTable1556353409410 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_shipping_region_shipping',
            columnNames: ['shipping_region_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'shipping_region',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('shipping', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('shipping', this.tableForeignKey);
        });
    }
}
exports.AddShippingRegionRelationToShippingTable1556353409410 = AddShippingRegionRelationToShippingTable1556353409410;
//# sourceMappingURL=1556353409410-AddShippingRegionRelationToShippingTable.js.map