import { Get, JsonController, OnUndefined, Params } from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { Attribute } from '../models/Attribute';
import { AttributeValue } from '../models/AttributeValue';
import { AttributeService } from '../services/AttributeService';
import { IdRequest } from './requests/IdRequest';

@JsonController('/attributes')
export class AttributeController {

    constructor(
        private attributeService: AttributeService
    ) { }

    @Get()
    public find(): Promise<Attribute[]> {
        return this.attributeService.find();
    }

    @Get('/:id')
    @OnUndefined(NotFoundError)
    public one(@Params() idRequest: IdRequest): Promise<Attribute | undefined> {
        return this.attributeService.findOne(idRequest.id);
    }

    @Get('/value/:id')
    @OnUndefined(NotFoundError)
    public value(@Params() idRequest: IdRequest): Promise<AttributeValue[] | undefined> {
        return this.attributeService.findValue(idRequest.id);
    }

    @Get('/product/:id')
    @OnUndefined(NotFoundError)
    public product(@Params() idRequest: IdRequest): Promise<any[]> {
        return this.attributeService.findProduct(idRequest.id);
    }

}
