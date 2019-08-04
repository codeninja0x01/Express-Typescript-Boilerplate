import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Tax as TaxModel } from '../models/Tax';
import { TaxService } from '../services/TaxService';
import { Tax } from '../types/Tax';

@Service()
@Resolver(() => Tax)
export class TaxResolver {

    constructor(
        private taxService: TaxService,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    @Query(() => [Tax])
    public getTaxs(): Promise<TaxModel[]> {
        this.log.info(`Find all tax`);
        return this.taxService.find();
    }

    @Query(() => Tax)
    public getTax(@Arg('id') id: number): Promise<TaxModel> {
        this.log.info(`Find one tax`);
        return this.taxService.findOne(id);
    }

}
