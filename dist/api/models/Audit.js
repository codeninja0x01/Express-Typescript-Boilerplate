"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
let Audit = class Audit {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Audit.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "message", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "code", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'order_id' }),
    tslib_1.__metadata("design:type", Number)
], Audit.prototype, "orderId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Order_1.Order, order => order.audits),
    typeorm_1.JoinColumn({ name: 'order_id' }),
    tslib_1.__metadata("design:type", Order_1.Order)
], Audit.prototype, "order", void 0);
Audit = tslib_1.__decorate([
    typeorm_1.Entity(),
    typeorm_1.CreateDateColumn()
], Audit);
exports.Audit = Audit;
//# sourceMappingURL=Audit.js.map