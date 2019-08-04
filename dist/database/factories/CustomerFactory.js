"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Customer_1 = require("../../../src/api/models/Customer");
typeorm_seeding_1.define(Customer_1.Customer, (faker, settings) => {
    const gender = faker.random.number(1);
    const name = faker.name.firstName(gender) + faker.name.lastName(gender);
    const email = faker.internet.email(name);
    const customer = new Customer_1.Customer();
    customer.name = name;
    customer.email = email;
    customer.password = '1234';
    return customer;
});
//# sourceMappingURL=CustomerFactory.js.map