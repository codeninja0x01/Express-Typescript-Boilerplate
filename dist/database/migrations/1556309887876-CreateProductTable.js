"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateProductTable1556309887876 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'product',
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
                        name: 'name',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'price',
                        type: 'double',
                    },
                    {
                        name: 'discounted_price',
                        type: 'double',
                        default: '0.00',
                        isNullable: true,
                    },
                    {
                        name: 'image_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'image_2',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'thumbnail',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'display',
                        type: 'tinyint',
                        default: '0',
                    },
                ],
                indices: [
                    {
                        columnNames: ['name', 'description'],
                        isFulltext: true,
                    },
                ],
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('product');
        });
    }
}
exports.CreateProductTable1556309887876 = CreateProductTable1556309887876;
//# sourceMappingURL=1556309887876-CreateProductTable.js.map