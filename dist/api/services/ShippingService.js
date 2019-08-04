"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const ShippingRepository_1 = require("../repositories/ShippingRepository");
let ShippingService = class ShippingService {
    constructor(shippingRepository, log) {
        this.shippingRepository = shippingRepository;
        this.log = log;
    }
    find() {
        this.log.info('Find all shipping');
        return this.shippingRepository.find();
    }
    region(id) {
        this.log.info('Find one shipping');
        return this.shippingRepository.findOne({ where: { shippingRegionId: { id } } });
    }
};
ShippingService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ShippingRepository_1.ShippingRepository, Object])
], ShippingService);
exports.ShippingService = ShippingService;
//# sourceMappingURL=ShippingService.js.map