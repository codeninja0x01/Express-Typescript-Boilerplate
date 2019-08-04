import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { Attribute as AttributeModel } from '../models/Attribute';
import { AttributeService } from '../services/AttributeService';
import { Attribute } from '../types/Attribute';

@Service()
@Resolver(() => Attribute)
export class AttributeResolver {

    constructor(
        private attributeService: AttributeService
    ) { }

    @Query(() => [Attribute])
    public attributes(): Promise<AttributeModel[]> {
        return this.attributeService.find();
    }

    @Query(() => Attribute)
    public attribute(@Arg('id', {nullable: false}) id: number): Promise<AttributeModel> {
        return this.attributeService.findOne(id);
    }

    @FieldResolver()
    public async values(@Root() attribute: AttributeModel): Promise<any[]> {
        return this.attributeService.findValue(attribute.id);
    }

}
