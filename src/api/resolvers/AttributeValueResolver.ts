import { FieldResolver, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { AttributeValue as AttributeValueModel } from '../models/AttributeValue';
import { Product as ProductModel } from '../models/Product';
import { AttributeService } from '../services/AttributeService';
import { AttributeValue } from '../types/AttributeValue';

@Service()
@Resolver(() => AttributeValue)
export class AttributeResolver {

    constructor(
        private attributeService: AttributeService
    ) { }

    @FieldResolver()
    public async products(@Root() av: AttributeValueModel): Promise<ProductModel[]> {
        return this.attributeService.productByValue(av.id);
    }

}
