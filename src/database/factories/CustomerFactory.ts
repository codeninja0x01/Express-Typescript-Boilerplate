import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Customer } from '../../../src/api/models/Customer';

define(Customer, (faker: typeof Faker, settings: { role: string }) => {
    const gender = faker.random.number(1);
    const name = faker.name.firstName(gender) +  faker.name.lastName(gender);
    const email = faker.internet.email(name);

    const customer = new Customer();
    customer.name = name;
    customer.email = email;
    customer.password = '1234';
    return customer;
});
