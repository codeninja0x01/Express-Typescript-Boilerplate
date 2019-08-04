import { EntityRepository, Repository } from 'typeorm';

import { Shipping } from '../models/Shipping';

@EntityRepository(Shipping)
export class ShippingRepository extends Repository<Shipping> {

}
