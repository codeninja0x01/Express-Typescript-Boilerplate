"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateTax {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield em.createQueryBuilder()
                .insert()
                .into('tax')
                .values([
                {
                    type: 'Sales Tax at 8.5%',
                    percentage: 8.50,
                },
                {
                    type: 'No Tax',
                    percentage: 0.00,
                },
            ])
                .execute();
        });
    }
}
exports.CreateTax = CreateTax;
//# sourceMappingURL=010-CreateTax.js.map