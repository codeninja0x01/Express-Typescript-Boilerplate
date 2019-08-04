import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateAttribute implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();

        await em.createQueryBuilder()
            .insert()
            .into('attribute')
            .values([
                { name: 'Size'},
                { name: 'Color'},
            ])
            .execute();
    }

}
