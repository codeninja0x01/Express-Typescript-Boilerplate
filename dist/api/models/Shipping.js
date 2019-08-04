"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const ShippingRegion_1 = require("./ShippingRegion");
let Shipping = class Shipping {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Shipping.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Shipping.prototype, "type", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'double', default: '0.00' }),
    tslib_1.__metadata("design:type", Number)
], Shipping.prototype, "cost", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'shipping_region_id' }),
    tslib_1.__metadata("design:type", Number)
], Shipping.prototype, "shippingRegionId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => ShippingRegion_1.ShippingRegion, shippingRegion => shippingRegion.shippings),
    typeorm_1.JoinColumn({ name: 'shipping_region_id' }),
    tslib_1.__metadata("design:type", ShippingRegion_1.ShippingRegion)
], Shipping.prototype, "shippingRegion", void 0);
Shipping = tslib_1.__decorate([
    typeorm_1.Entity()
], Shipping);
exports.Shipping = Shipping;
//# sourceMappingURL=Shipping.js.map