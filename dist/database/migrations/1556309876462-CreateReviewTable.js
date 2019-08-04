"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateReviewTable1556309876462 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'review',
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
                        name: 'review',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'rating',
                        type: 'int',
                    },
                    {
                        name: 'created_on',
                        type: 'timestamp',
                    },
                    {
                        name: 'product_id',
                        type: 'int',
                    },
                    {
                        name: 'customer_id',
                        type: 'int',
                    },
                ],
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('review');
        });
    }
}
exports.CreateReviewTable1556309876462 = CreateReviewTable1556309876462;
//# sourceMappingURL=1556309876462-CreateReviewTable.js.map