"use strict";
var Customer_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
"use strict";
const bcrypt = tslib_1.__importStar(require("bcrypt"));
const class_transformer_1 = require("class-transformer");
// import { Exclude } from 'class-transformer';
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const Review_1 = require("./Review");
const ShippingRegion_1 = require("./ShippingRegion");
let Customer = Customer_1 = class Customer {
    static hashPassword(pwd) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(pwd, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }
    static comparePassword(customer, pwd) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(pwd, customer.password, (err, res) => {
                resolve(res === true);
            });
        });
    }
    toString() {
        return this.name;
    }
    hashPassword() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.password = yield Customer_1.hashPassword(this.password);
        });
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty({ groups: ['create', 'update'] }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsEmail({ allow_display_name: true }, { groups: ['create'] }),
    class_validator_1.IsNotEmpty({ groups: ['create', 'update', 'login'] }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty({ groups: ['create', 'login'] }),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['address'] }),
    typeorm_1.Column({ name: 'address_1', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address1", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['address'] }),
    typeorm_1.Column({ name: 'address_2', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address2", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['address'] }),
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "city", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['address'] }),
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "region", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['address'] }),
    typeorm_1.Column({ name: 'postal_code', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "postalCode", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['address'] }),
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "country", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'day_phone', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "dayPhone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'eve_phone', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "evePhone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'mob_phone', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "mobPhone", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['card'] }),
    class_validator_1.IsCreditCard({ groups: ['card'] }),
    typeorm_1.Column({ name: 'credit_card', nullable: true }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "creditCard", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['address'] }),
    typeorm_1.Column({ name: 'shipping_region_id' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "shippingRegionId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => ShippingRegion_1.ShippingRegion),
    typeorm_1.JoinColumn({ name: 'shipping_region_id' }),
    tslib_1.__metadata("design:type", ShippingRegion_1.ShippingRegion)
], Customer.prototype, "shippingRegion", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Order_1.Order, order => order.customer),
    tslib_1.__metadata("design:type", Array)
], Customer.prototype, "orders", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => Review_1.Review, reviews => reviews.customer),
    tslib_1.__metadata("design:type", Array)
], Customer.prototype, "reviews", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Customer.prototype, "hashPassword", null);
Customer = Customer_1 = tslib_1.__decorate([
    typeorm_1.Entity()
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map