"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Shipping_1 = require("../models/Shipping");
let ShippingRepository = class ShippingRepository extends typeorm_1.Repository {
};
ShippingRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Shipping_1.Shipping)
], ShippingRepository);
exports.ShippingRepository = ShippingRepository;
//# sourceMappingURL=ShippingRepository.js.map