import { EntityRepository, Repository } from 'typeorm';

import { ShippingRegion } from '../models/ShippingRegion';

@EntityRepository(ShippingRegion)
export class ShippingRegionRepository extends Repository<ShippingRegion> {

}
