"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dataloader_1 = tslib_1.__importDefault(require("dataloader"));
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const DLoader_1 = require("../../decorators/DLoader");
const Attribute_1 = require("../models/Attribute");
const AttributeValue_1 = require("../models/AttributeValue");
const AttributeService_1 = require("../services/AttributeService");
const AttributeValue_2 = require("../types/AttributeValue");
let AttributeResolver = class AttributeResolver {
    constructor(attributeService, attributeLoader) {
        this.attributeService = attributeService;
        this.attributeLoader = attributeLoader;
    }
    products(av) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.attributeService.productByValue(av.id);
        });
    }
    attribute(av) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!av.attributeId) {
                return undefined;
            }
            return this.attributeLoader.load(av.attributeId);
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AttributeValue_1.AttributeValue]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeResolver.prototype, "products", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AttributeValue_1.AttributeValue]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeResolver.prototype, "attribute", null);
AttributeResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(() => AttributeValue_2.AttributeValue),
    tslib_1.__param(1, DLoader_1.DLoader(Attribute_1.Attribute)),
    tslib_1.__metadata("design:paramtypes", [AttributeService_1.AttributeService,
        dataloader_1.default])
], AttributeResolver);
exports.AttributeResolver = AttributeResolver;
//# sourceMappingURL=AttributeValueResolver.js.map