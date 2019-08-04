"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Customer_1 = require("../../../src/api/models/Customer");
class CreateBruce {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // const userFactory = factory<User, { role: string }>(User as any);
            // const adminUserFactory = userFactory({ role: 'admin' });
            // const bruce = await adminUserFactory.make();
            // console.log(bruce);
            // const bruce2 = await adminUserFactory.seed();
            // console.log(bruce2);
            // const bruce3 = await adminUserFactory
            //     .map(async (e: User) => {
            //         e.firstName = 'Bruce';
            //         return e;
            //     })
            //     .seed();
            // console.log(bruce3);
            // return bruce;
            // const connection = await factory.getConnection();
            const em = connection.createEntityManager();
            const customer = new Customer_1.Customer();
            customer.name = 'Bruce Wayne';
            customer.email = 'bruce.wayne@wayne-enterprises.com';
            customer.password = '1234';
            return yield em.save(customer);
        });
    }
}
exports.CreateBruce = CreateBruce;
//# sourceMappingURL=000-CreateBruce.js.map