"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Audit_1 = require("./Audit");
const Customer_1 = require("./Customer");
const OrderDetail_1 = require("./OrderDetail");
const Shipping_1 = require("./Shipping");
const Tax_1 = require("./Tax");
let Order = class Order {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'total_amount' }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "totalAmount", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'shipped_on', type: 'datetime' }),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "shippedOn", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ default: '0' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "comments", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'auth_code', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "authCode", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "reference", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "customerId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'tax_id' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "taxId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'shipping_id' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "shippingId", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_on' }),
    tslib_1.__metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Customer_1.Customer, customer => customer.orders),
    typeorm_1.JoinColumn({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", Customer_1.Customer)
], Order.prototype, "customer", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Tax_1.Tax),
    typeorm_1.JoinColumn({ name: 'tax_id' }),
    tslib_1.__metadata("design:type", Tax_1.Tax)
], Order.prototype, "tax", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Shipping_1.Shipping),
    typeorm_1.JoinColumn({ name: 'shipping_id' }),
    tslib_1.__metadata("design:type", Shipping_1.Shipping)
], Order.prototype, "shipping", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Audit_1.Audit, audit => audit.order),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "audits", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => OrderDetail_1.OrderDetail, detail => detail.order),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "details", void 0);
Order = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'orders' }),
    typeorm_1.CreateDateColumn()
], Order);
exports.Order = Order;
//# sourceMappingURL=Order.js.map