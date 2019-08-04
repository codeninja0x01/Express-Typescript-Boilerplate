import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateShippingRegion implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();

        await em.createQueryBuilder()
            .insert()
            .into('ShippingRegion')
            .values([
                {
                    title: 'Please Select',
                },
                {
                    title: 'US / Canada',
                },
                {
                    title: 'Europe',
                },
                {
                    title: 'Rest of World',
                },
            ])
            .execute();
    }

}
