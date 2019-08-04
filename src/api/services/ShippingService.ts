import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Shipping } from '../models/Shipping';
import { ShippingRepository } from '../repositories/ShippingRepository';

@Service()
export class ShippingService {

    constructor(
        @OrmRepository() private shippingRepository: ShippingRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Shipping[]> {
        this.log.info('Find all shipping');
        return this.shippingRepository.find();
    }

    public region(id: number): Promise<Shipping | undefined> {
        this.log.info('Find one shipping');
        return this.shippingRepository.findOne({ where: {shippingRegionId: {id}} });
    }
}
