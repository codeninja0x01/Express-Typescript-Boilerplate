import { Customer } from '../../../src/api/models/Customer';
import { CustomerService } from '../../../src/api/services/CustomerService';
import { events } from '../../../src/api/subscribers/events';
import { EventDispatcherMock } from '../lib/EventDispatcherMock';
import { LogMock } from '../lib/LogMock';
import { RepositoryMock } from '../lib/RepositoryMock';

describe('CustomerService', () => {

    test('Find should return a list of customers', async (done) => {
        const log = new LogMock();
        const repo = new RepositoryMock();
        const ed = new EventDispatcherMock();
        const customer = new Customer();
        customer.name = 'John Doe';
        customer.email = 'john.doe@test.com';
        repo.list = [customer];
        const customerService = new CustomerService(repo as any, ed as any, log);
        const list = await customerService.all();
        expect(list[0].name).toBe(customer.name);
        done();
    });

    test('Create should dispatch subscribers', async (done) => {
        const log = new LogMock();
        const repo = new RepositoryMock();
        const ed = new EventDispatcherMock();
        const customer = new Customer();
        customer.name = 'John Doe';
        customer.email = 'john.doe@test.com';
        const customerService = new CustomerService(repo as any, ed as any, log);
        const newUser = await customerService.create(customer);
        expect(ed.dispatchMock).toBeCalledWith([events.customer.created, newUser]);
        done();
    });

});
