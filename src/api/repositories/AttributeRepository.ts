import { EntityRepository, Repository } from 'typeorm';

import { Attribute } from '../models/Attribute';

@EntityRepository(Attribute)
export class AttributeRepository extends Repository<Attribute> {

}
