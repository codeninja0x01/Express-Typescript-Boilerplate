import { validate } from 'class-validator';

import { Customer } from '../../../src/api/models/Customer';

describe('CustomerValidations', () => {

    test('Customer should always have a name', async (done) => {
        const customer = new Customer();
        const errorsOne = await validate(customer);
        customer.name = 'TestName';
        const errorsTwo = await validate(customer);
        expect(errorsOne.length).toBeGreaterThan(errorsTwo.length);
        done();
    });

    test('Customer should always have a email', async (done) => {
        const customer = new Customer();
        const errorsOne = await validate(customer);
        customer.email = 'test@test.com';
        const errorsTwo = await validate(customer);
        expect(errorsOne.length).toBeGreaterThan(errorsTwo.length);
        done();
    });

    test('Customer validation should succeed with all required fields', async (done) => {
        const customer = new Customer();
        customer.name = 'TestName';
        customer.email = 'test@test.com';
        customer.password = '123456789';
        const errors = await validate(customer, {groups: ['created']});
        expect(errors.length).toEqual(0);
        done();
    });

});
