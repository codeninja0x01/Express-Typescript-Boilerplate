"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateCustomerTable1556309861145 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'customer',
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
                        name: 'email',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '255',
                    },
                    {
                        name: 'address_1',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'address_2',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'region',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'postal_code',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'country',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'day_phone',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'eve_phone',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'mob_phone',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'credit_card',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'shipping_region_id',
                        type: 'int',
                        isNullable: true,
                    },
                ],
            });
            yield queryRunner.createTable(table);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('customer');
        });
    }
}
exports.CreateCustomerTable1556309861145 = CreateCustomerTable1556309861145;
//# sourceMappingURL=1556309861145-CreateCustomerTable.js.map