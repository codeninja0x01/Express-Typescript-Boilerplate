import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateTax implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();

        await em.createQueryBuilder()
            .insert()
            .into('tax')
            .values([
                {
                    type: 'Sales Tax at 8.5%',
                    percentage: 8.50,
                },
                {
                    type: 'No Tax',
                    percentage: 0.00,
                },
            ])
            .execute();
    }

}
