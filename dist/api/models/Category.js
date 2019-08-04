"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Department_1 = require("./Department");
const Product_1 = require("./Product");
let Category = class Category {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'department_id' }),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "departmentId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => Product_1.Product, product => product.categories),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "products", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Department_1.Department, department => department.categories),
    typeorm_1.JoinColumn({ name: 'department_id' }),
    tslib_1.__metadata("design:type", Department_1.Department)
], Category.prototype, "department", void 0);
Category = tslib_1.__decorate([
    typeorm_1.Entity()
], Category);
exports.Category = Category;
//# sourceMappingURL=Category.js.map