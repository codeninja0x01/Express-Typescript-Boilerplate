import { EntityRepository, Repository } from 'typeorm';

import { AttributeValue } from '../models/AttributeValue';

@EntityRepository(AttributeValue)
export class AttributeValueRepository extends Repository<AttributeValue> {

    /**
     * Find by user_id is used for our data-loader to get all needed pets in one query.
     */
    public findByAttributeIds(ids: number[]): Promise<AttributeValue[]> {
        return this.createQueryBuilder()
            .select()
            .where(`attribute_value.attribute_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }
}
