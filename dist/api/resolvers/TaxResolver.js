"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const Logger_1 = require("../../decorators/Logger");
const TaxService_1 = require("../services/TaxService");
const Tax_1 = require("../types/Tax");
let TaxResolver = class TaxResolver {
    constructor(taxService, log) {
        this.taxService = taxService;
        this.log = log;
    }
    getTaxs() {
        this.log.info(`Find all tax`);
        return this.taxService.find();
    }
    getTax(id) {
        this.log.info(`Find one tax`);
        return this.taxService.findOne(id);
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [Tax_1.Tax]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TaxResolver.prototype, "getTaxs", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => Tax_1.Tax),
    tslib_1.__param(0, type_graphql_1.Arg('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxResolver.prototype, "getTax", null);
TaxResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(() => Tax_1.Tax),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [TaxService_1.TaxService, Object])
], TaxResolver);
exports.TaxResolver = TaxResolver;
//# sourceMappingURL=TaxResolver.js.map