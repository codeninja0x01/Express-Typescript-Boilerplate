import { Get, JsonController, OnUndefined, Params } from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { Shipping } from '../models/Shipping';
import { ShippingService } from '../services/ShippingService';
import { IdRequest } from './requests/IdRequest';

@JsonController('/shipping')
export class ShippingController {

    constructor(
        private shippingService: ShippingService
    ) { }

    @Get()
    public find(): Promise<Shipping[]> {
        return this.shippingService.find();
    }

    @Get('/region/:id')
    @OnUndefined(NotFoundError)
    public one(@Params() idRequest: IdRequest): Promise<Shipping | undefined> {
        return this.shippingService.region(idRequest.id);
    }
}
