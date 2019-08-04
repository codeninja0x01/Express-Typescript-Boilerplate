"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Shipping_1 = require("./Shipping");
let ShippingRegion = class ShippingRegion {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], ShippingRegion.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], ShippingRegion.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Shipping_1.Shipping, shipping => shipping.shippingRegion),
    tslib_1.__metadata("design:type", Array)
], ShippingRegion.prototype, "shippings", void 0);
ShippingRegion = tslib_1.__decorate([
    typeorm_1.Entity()
], ShippingRegion);
exports.ShippingRegion = ShippingRegion;
//# sourceMappingURL=ShippingRegion.js.map