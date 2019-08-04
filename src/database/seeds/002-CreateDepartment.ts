import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateDepartment implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();

        await em.createQueryBuilder()
            .insert()
            .into('department')
            .values([
                { name: 'Regional', description: 'Proud of your country? Wear a T-shirt with a national symbol stamp!'},
                { name: 'Nature', description: 'Find beautiful T-shirts with animals and flowers in our Nature department!'},
                { name: 'Seasonal', description: 'Each time of the year has a special flavor. Our seasonal T-shirts express'
                + 'traditional symbols using unique postal stamp pictures.'},
            ])
            .execute();
    }

}
