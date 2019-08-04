import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Tax } from '../models/Tax';
import { TaxRepository } from '../repositories/TaxRepository';

@Service()
export class TaxService {

    constructor(
        @OrmRepository() private taxRepository: TaxRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Tax[]> {
        this.log.info('Find all Tax');
        return this.taxRepository.find();
    }

    public findOne(id: number): Promise<Tax | undefined> {
        this.log.info('Find one Tax');
        return this.taxRepository.findOne({ id });
    }
}
