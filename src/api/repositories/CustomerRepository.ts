import { EntityRepository, Repository } from 'typeorm';

import { Customer } from '../models/Customer';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

    /**
     * findOneByEmail
     */
    // public findOneByEmail(email: string): Promise<Customer> {
    //     return this.findOne({where: {email}});
    // }

}
