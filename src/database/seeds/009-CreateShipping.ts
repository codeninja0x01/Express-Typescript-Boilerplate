import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateShipping implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();

        await em.createQueryBuilder()
            .insert()
            .into('shipping')
            .values([
                {
                    type: 'Next Day Delivery ($20)',
                    cost: 20,
                    shippingRegionId: 2,
                },
                {
                    type: '3-4 Days ($10)',
                    cost: 10,
                    shippingRegionId: 2,
                },
                {
                    type: '7 Days ($5)',
                    cost: 5,
                    shippingRegionId: 2,
                },
                {
                    type: 'By air (7 days, $25)',
                    cost: 25,
                    shippingRegionId: 3,
                },
                {
                    type: 'By sea (28 days, $10)',
                    cost: 10,
                    shippingRegionId: 3,
                },
                {
                    type: 'By air (10 days, $35)',
                    cost: 35,
                    shippingRegionId: 4,
                },
                {
                    type: 'By sea (28 days, $30)',
                    cost: 30,
                    shippingRegionId: 4,
                },
            ])
            .execute();
    }

}
