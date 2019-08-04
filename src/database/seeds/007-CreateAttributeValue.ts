import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateAttributeValue implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();

        await em.createQueryBuilder()
            .insert()
            .into('attribute_value')
            .values([
                { attributeId: 1, name: 'S'},
                { attributeId: 1, name: 'M'},
                { attributeId: 1, name: 'L'},
                { attributeId: 1, name: 'Xl'},
                { attributeId: 1, name: 'XXL'},
                { attributeId: 2, name: 'White'},
                { attributeId: 2, name: 'Black'},
                { attributeId: 2, name: 'Orange'},
                { attributeId: 2, name: 'Red'},
                { attributeId: 2, name: 'Yellow'},
                { attributeId: 2, name: 'Green'},
                { attributeId: 2, name: 'Indigo'},
                { attributeId: 2, name: 'Blue'},
                { attributeId: 2, name: 'Purple'},
            ])
            .execute();
    }

}
