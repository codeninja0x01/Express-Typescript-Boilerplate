import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { Customer } from '../../api/models/Customer';

export class CreateCustomers implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        await factory(Customer)().seedMany(10);
    }

}
