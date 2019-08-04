import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Shipping as ShippingModel } from '../models/Shipping';
import { ShippingService } from '../services/ShippingService';
import { Shipping } from '../types/Shipping';

@Service()
@Resolver(() => Shipping)
export class ShippingResolver {

    constructor(
        private shippingService: ShippingService,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    @Query(() => [Shipping])
    public getShippings(): Promise<ShippingModel[]> {
        this.log.info(`Find all shipping`);
        return this.shippingService.find();
    }

    @Query(() => Shipping)
    public getRegion(@Arg('id') id: number): Promise<ShippingModel | undefined> {
        this.log.info(`Find one tax`);
        return this.shippingService.region(id);
    }

}
