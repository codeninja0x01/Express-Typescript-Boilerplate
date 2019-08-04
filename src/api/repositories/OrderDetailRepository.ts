import { EntityRepository, Repository } from 'typeorm';

import { OrderDetail } from '../models/OrderDetail';

@EntityRepository(OrderDetail)
export class OrderDetailRepository extends Repository<OrderDetail> {

}
