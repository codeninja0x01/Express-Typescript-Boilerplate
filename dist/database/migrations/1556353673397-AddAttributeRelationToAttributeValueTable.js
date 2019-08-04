"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddAttributeRelationToAttributeValueTable1556353673397 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_attribute_attribute_value',
            columnNames: ['attribute_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'attribute',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('attribute_value', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('attribute_value', this.tableForeignKey);
        });
    }
}
exports.AddAttributeRelationToAttributeValueTable1556353673397 = AddAttributeRelationToAttributeValueTable1556353673397;
//# sourceMappingURL=1556353673397-AddAttributeRelationToAttributeValueTable.js.map