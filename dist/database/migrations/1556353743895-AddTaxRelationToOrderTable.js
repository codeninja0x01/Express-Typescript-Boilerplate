"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddTaxRelationToOrderTable1556353743895 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_tax_order',
            columnNames: ['tax_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tax',
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
exports.AddTaxRelationToOrderTable1556353743895 = AddTaxRelationToOrderTable1556353743895;
//# sourceMappingURL=1556353743895-AddTaxRelationToOrderTable.js.map