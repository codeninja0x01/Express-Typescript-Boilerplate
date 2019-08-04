"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateShipping {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            yield em.createQueryBuilder()
                .insert()
                .into('shipping')
                .values([
                {
                    type: 'Next Day Delivery ($20)',
                    cost: 20,
                    shippingRegionId: 2,
                },
                {
                    type: '3-4 Days ($10)',
                    cost: 10,
                    shippingRegionId: 2,
                },
                {
                    type: '7 Days ($5)',
                    cost: 5,
                    shippingRegionId: 2,
                },
                {
                    type: 'By air (7 days, $25)',
                    cost: 25,
                    shippingRegionId: 3,
                },
                {
                    type: 'By sea (28 days, $10)',
                    cost: 10,
                    shippingRegionId: 3,
                },
                {
                    type: 'By air (10 days, $35)',
                    cost: 35,
                    shippingRegionId: 4,
                },
                {
                    type: 'By sea (28 days, $30)',
                    cost: 30,
                    shippingRegionId: 4,
                },
            ])
                .execute();
        });
    }
}
exports.CreateShipping = CreateShipping;
//# sourceMappingURL=009-CreateShipping.js.map