"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Customer_1 = require("../../api/models/Customer");
class CreateCustomers {
    run(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield factory(Customer_1.Customer)().seedMany(10);
        });
    }
}
exports.CreateCustomers = CreateCustomers;
//# sourceMappingURL=001-CreateCustomers.js.map