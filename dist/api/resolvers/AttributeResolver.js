"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const Attribute_1 = require("../models/Attribute");
const AttributeService_1 = require("../services/AttributeService");
const Attribute_2 = require("../types/Attribute");
let AttributeResolver = class AttributeResolver {
    constructor(attributeService) {
        this.attributeService = attributeService;
    }
    attributes() {
        return this.attributeService.find();
    }
    attribute(id) {
        return this.attributeService.findOne(id);
    }
    values(attribute) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.attributeService.findValue(attribute.id);
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [Attribute_2.Attribute]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeResolver.prototype, "attributes", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => Attribute_2.Attribute),
    tslib_1.__param(0, type_graphql_1.Arg('id', { nullable: false })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeResolver.prototype, "attribute", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Attribute_1.Attribute]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributeResolver.prototype, "values", null);
AttributeResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(() => Attribute_2.Attribute),
    tslib_1.__metadata("design:paramtypes", [AttributeService_1.AttributeService])
], AttributeResolver);
exports.AttributeResolver = AttributeResolver;
//# sourceMappingURL=AttributeResolver.js.map