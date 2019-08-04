"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddDepartmentRelationToCategoryTable1556353358840 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_department_category',
            columnNames: ['department_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'department',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('category', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('category', this.tableForeignKey);
        });
    }
}
exports.AddDepartmentRelationToCategoryTable1556353358840 = AddDepartmentRelationToCategoryTable1556353358840;
//# sourceMappingURL=1556353358840-AddDepartmentRelationToCategoryTable.js.map