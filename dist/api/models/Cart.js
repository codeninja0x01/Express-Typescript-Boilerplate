"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let Cart = class Cart {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cart_key' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Cart.prototype, "cartKey", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Cart.prototype, "attribute", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "quantity", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ default: true, name: 'buy_now' }),
    tslib_1.__metadata("design:type", Boolean)
], Cart.prototype, "buyNow", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_on' }),
    tslib_1.__metadata("design:type", Date)
], Cart.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], Cart.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Product_1.Product),
    typeorm_1.JoinColumn({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Product_1.Product)
], Cart.prototype, "product", void 0);
Cart = tslib_1.__decorate([
    typeorm_1.Entity(),
    typeorm_1.CreateDateColumn()
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map