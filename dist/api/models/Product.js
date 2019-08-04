"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const AttributeValue_1 = require("./AttributeValue");
const Cart_1 = require("./Cart");
const Category_1 = require("./Category");
const OrderDetail_1 = require("./OrderDetail");
const Review_1 = require("./Review");
let Product = class Product {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'double' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'double', default: '0.00', name: 'discounted_price' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "discountedPrice", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image_1' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image1", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image_2' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image2", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ default: '1' }),
    tslib_1.__metadata("design:type", Boolean)
], Product.prototype, "display", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Review_1.Review, reviews => reviews.product),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "reviews", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => OrderDetail_1.OrderDetail, orders => orders.product),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "orders", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Cart_1.Cart, carts => carts.product),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "carts", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => Category_1.Category, categories => categories.products),
    typeorm_1.JoinTable({ name: 'product_categories', joinColumns: [{ name: 'product_id' }], inverseJoinColumns: [{ name: 'category_id' }] }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "categories", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => AttributeValue_1.AttributeValue, attributes => attributes.products),
    typeorm_1.JoinTable({ name: 'product_attributes', joinColumns: [{ name: 'product_id' }], inverseJoinColumns: [{ name: 'attribute_value_id' }] }),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "attributes", void 0);
Product = tslib_1.__decorate([
    typeorm_1.Entity()
], Product);
exports.Product = Product;
//# sourceMappingURL=Product.js.map