import { Customer } from 'src/api/models/Customer';
import { Container } from 'typedi';
import { Connection } from 'typeorm';

import { CustomerService } from '../../src/api/services/CustomerService';
import { closeDatabase, createDatabaseConnection, migrateDatabase } from '../utils/database';
import { configureLogger } from '../utils/logger';

describe('CustomerService', () => {

    // -------------------------------------------------------------------------
    // Setup up
    // -------------------------------------------------------------------------

    let connection: Connection;
    beforeAll(async () => {
        configureLogger();
        connection = await createDatabaseConnection();
    });
    beforeEach(() => migrateDatabase(connection));

    // -------------------------------------------------------------------------
    // Tear down
    // -------------------------------------------------------------------------

    afterAll(() => closeDatabase(connection));

    // -------------------------------------------------------------------------
    // Test cases
    // -------------------------------------------------------------------------

    test('should create a new pet in the database', async (done) => {
        const customer = new Customer();
        customer.name = 'test';
        customer.email = 'test@test.com';
        customer.password = '123';
        const service = Container.get<CustomerService>(CustomerService);
        const resultCreate = await service.create(customer);
        expect(resultCreate.customer.name).toBe(customer.name);
        expect(resultCreate.customer.email).toBe(customer.email);

        const resultFind = await service.find(resultCreate.customer.email);
        if (resultFind) {
            expect(resultFind.name).toBe(customer.name);
            expect(resultFind.email).toBe(customer.email);
        } else {
            fail('Could not find customer');
        }
        done();
    });

});
