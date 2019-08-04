import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { Customer } from '../../../src/api/models/Customer';

export class CreateBruce implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
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

        const customer = new Customer();
        customer.name = 'Bruce Wayne';
        customer.email = 'bruce.wayne@wayne-enterprises.com';
        customer.password = '1234';
        return await em.save(customer);
    }

}
