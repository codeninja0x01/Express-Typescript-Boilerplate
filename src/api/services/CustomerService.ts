import jwt from 'jsonwebtoken';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { env } from '../../env';
import { Customer } from '../models/Customer';
import { CustomerRepository } from '../repositories/CustomerRepository';
import { events } from '../subscribers/events';

@Service()
export class CustomerService {
    constructor(
        @OrmRepository() private customerRepository: CustomerRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async create(customer: Customer):  Promise<{ customer, expires_in, accessToken }> {
        this.log.info('Create customer');
        const customerData = await this.customerRepository.save(customer);
        const customerToken = await this.customerToken(customerData);
        this.eventDispatcher.dispatch(events.customer.created, customerToken);
        return customerToken;
    }

    public async update({email, name, evePhone, dayPhone, mobPhone}: Customer, customerId: number): Promise<Customer> {
        this.log.info('Update customer');
        await this.customerRepository.update({id: customerId}, {email, name, evePhone, mobPhone, dayPhone});
        return await this.customerRepository.findOne({id: customerId});
    }

    public async address({address1, address2, city, country, postalCode, region}: Customer, customerId: number): Promise<Customer> {
        this.log.info('Update address');
        await this.customerRepository.update({id: customerId}, {address1, address2, city, country, postalCode, region});
        return await this.customerRepository.findOne({id: customerId});
    }

    public async card({creditCard}: Customer, customerId: number): Promise<Customer> {
        this.log.info('Update credit card');
        await this.customerRepository.update({id: customerId}, {creditCard});
        return await this.customerRepository.findOne({id: customerId});
    }

    public async all(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }

    public async find(email: string): Promise<Customer> {
        const customer = await this.customerRepository.findOne(
            { where: { email } }
        );
        return customer;
    }

    public async login(customer: Customer): Promise<any> {
        this.log.info('Login');

        const existCustomer = await this.find(customer.email);

        const compare = await Customer.comparePassword(
            existCustomer,
            customer.password
        );
        if (!compare) {
            return undefined;
        }
        return this.customerToken(existCustomer);
    }

    private async customerToken(customer: Customer): Promise<{ customer, expires_in, accessToken }> {

        const payload = {
            email: customer.email,
            name: customer.name,
        };

        const token = await jwt.sign(payload, env.jwt.secret, {
            expiresIn: 60 * 60,
        });

        return {
            customer,
            expires_in: '1H',
            accessToken: 'Bearer ' + token,
        };
    }
}
