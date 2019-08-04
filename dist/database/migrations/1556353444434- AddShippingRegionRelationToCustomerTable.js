"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddShippingRegionRelationToCustomerTable1556353444434 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_shipping_region_customer',
            columnNames: ['shipping_region_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'shipping_region',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('customer', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('customer', this.tableForeignKey);
        });
    }
}
exports.AddShippingRegionRelationToCustomerTable1556353444434 = AddShippingRegionRelationToCustomerTable1556353444434;
//# sourceMappingURL=1556353444434- AddShippingRegionRelationToCustomerTable.js.map