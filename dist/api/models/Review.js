"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Customer_1 = require("./Customer");
const Product_1 = require("./Product");
let Review = class Review {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Review.prototype, "review", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "rating", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "customerId", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_on' }),
    tslib_1.__metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Product_1.Product, product => product.reviews),
    typeorm_1.JoinColumn({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Product_1.Product)
], Review.prototype, "product", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Customer_1.Customer, customer => customer.reviews),
    typeorm_1.JoinColumn({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", Customer_1.Customer)
], Review.prototype, "customer", void 0);
Review = tslib_1.__decorate([
    typeorm_1.Entity()
], Review);
exports.Review = Review;
//# sourceMappingURL=Review.js.map