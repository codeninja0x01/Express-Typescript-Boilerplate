import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Attribute } from '../models/Attribute';
import { AttributeValue } from '../models/AttributeValue';
import { Product } from '../models/Product';
import { AttributeRepository } from '../repositories/AttributeRepository';
import { AttributeValueRepository } from '../repositories/AttributeValueRepository';
import { ProductRepository } from '../repositories/ProductRepository';

@Service()
export class AttributeService {

    constructor(
        @OrmRepository() private attributeRepository: AttributeRepository,
        @OrmRepository() private attributeValueRepository: AttributeValueRepository,
        @OrmRepository() private productRepository: ProductRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Attribute[]> {
        this.log.info('Find all attributes');
        return this.attributeRepository.find({cache: true});
    }

    public findOne(id: number): Promise<Attribute | undefined> {
        this.log.info('Find one attribute');
        return this.attributeRepository.findOne({ id });
    }

    public findValue(id: number): Promise<AttributeValue[] | undefined> {
        this.log.info('Find attribute values');
        return this.attributeValueRepository.find({where: {attributeId: id}});
    }

    public async findProduct(id: number): Promise<any[]> {
        this.log.info('Find attribute by productId');
        const productA = await this.attributeValueRepository
            .createQueryBuilder('attributeValue')
            .innerJoinAndSelect('attributeValue.attribute', 'attribute')
            .select(['attribute.name', 'attributeValue.id', 'attributeValue.name', 'attributeValue.attributeId'])
            .where(qb => {
                const subQuery = qb.subQuery()
                .select('attribute_value_id')
                .from('product_attributes', 'product_attribute')
                .where('product_id = :id')
                .getQuery();
                return 'attributeValue.id IN ' + subQuery;
            })
            .cache(true)
            .setParameter('id', id)
            .getRawMany();
        return productA;
    }

    public async productByValue(attributeValueId: number): Promise<Product[]> {
        this.log.info('Find product by attributeValueId');
        return this.productRepository
            .createQueryBuilder('p')
            .innerJoinAndMapMany('p.values', 'attribute_value', 'value')
            .where('value.id = :attributeValueId', {attributeValueId})
            .cache(true)
            .getMany();
    }

}
