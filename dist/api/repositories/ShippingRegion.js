"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const ShippingRegion_1 = require("../models/ShippingRegion");
let ShippingRegionRepository = class ShippingRegionRepository extends typeorm_1.Repository {
};
ShippingRegionRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(ShippingRegion_1.ShippingRegion)
], ShippingRegionRepository);
exports.ShippingRegionRepository = ShippingRegionRepository;
//# sourceMappingURL=ShippingRegion.js.map