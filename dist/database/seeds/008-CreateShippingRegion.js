"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateShippingRegion {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield em.createQueryBuilder()
                .insert()
                .into('ShippingRegion')
                .values([
                {
                    title: 'Please Select',
                },
                {
                    title: 'US / Canada',
                },
                {
                    title: 'Europe',
                },
                {
                    title: 'Rest of World',
                },
            ])
                .execute();
        });
    }
}
exports.CreateShippingRegion = CreateShippingRegion;
//# sourceMappingURL=008-CreateShippingRegion.js.map