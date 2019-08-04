"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const AttributeRepository_1 = require("../repositories/AttributeRepository");
const AttributeValueRepository_1 = require("../repositories/AttributeValueRepository");
const ProductRepository_1 = require("../repositories/ProductRepository");
let AttributeService = class AttributeService {
    constructor(attributeRepository, attributeValueRepository, productRepository, log) {
        this.attributeRepository = attributeRepository;
        this.attributeValueRepository = attributeValueRepository;
        this.productRepository = productRepository;
        this.log = log;
    }
    find() {
        this.log.info('Find all attributes');
        return this.attributeRepository.find();
    }
    findOne(id) {
        this.log.info('Find one attribute');
        return this.attributeRepository.findOne({ id });
    }
    findValue(id) {
        this.log.info('Find attribute values');
        return this.attributeValueRepository.find({ where: { attributeId: id } });
    }
    findProduct(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find attribute by productId');
            const productA = yield this.attributeValueRepository
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
                .setParameter('id', id)
                .getRawMany();
            return productA;
        });
    }
    productByValue(attributeValueId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find product by attributeValueId');
            const product = this.productRepository
                .createQueryBuilder('p')
                .innerJoinAndMapMany('p.values', 'attribute_value', 'value')
                .where('value.id = :attributeValueId', { attributeValueId })
                .getMany();
            return product;
        });
    }
};
AttributeService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(2, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(3, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [AttributeRepository_1.AttributeRepository,
        AttributeValueRepository_1.AttributeValueRepository,
        ProductRepository_1.ProductRepository, Object])
], AttributeService);
exports.AttributeService = AttributeService;
//# sourceMappingURL=AttributeService.js.map