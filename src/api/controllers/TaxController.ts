import { Get, JsonController, OnUndefined, Params } from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { Tax } from '../models/Tax';
import { TaxService } from '../services/TaxService';
import { IdRequest } from './requests/IdRequest';

@JsonController('/tax')
export class TaxController {

    constructor(
        private taxService: TaxService
    ) { }

    @Get()
    public find(): Promise<Tax[]> {
        return this.taxService.find();
    }

    @Get('/:id')
    @OnUndefined(NotFoundError)
    public one(@Params() idRequest: IdRequest): Promise<Tax | undefined> {
        return this.taxService.findOne(idRequest.id);
    }
}
