"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
let OrderDetail = class OrderDetail {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], OrderDetail.prototype, "attribute", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'product_name' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], OrderDetail.prototype, "productName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'double', name: 'unit_cost' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "unitCost", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ default: 'USD' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], OrderDetail.prototype, "currency", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'order_id' }),
    tslib_1.__metadata("design:type", Number)
], OrderDetail.prototype, "orderId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Product_1.Product, product => product.orders),
    typeorm_1.JoinColumn({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Product_1.Product)
], OrderDetail.prototype, "product", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Order_1.Order, order => order.details),
    typeorm_1.JoinColumn({ name: 'order_id' }),
    tslib_1.__metadata("design:type", Order_1.Order)
], OrderDetail.prototype, "order", void 0);
OrderDetail = tslib_1.__decorate([
    typeorm_1.Entity()
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=OrderDetail.js.map