"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Category_1 = require("./Category");
let Department = class Department {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Department.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Department.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => Category_1.Category, categories => categories.department),
    tslib_1.__metadata("design:type", Array)
], Department.prototype, "categories", void 0);
Department = tslib_1.__decorate([
    typeorm_1.Entity()
], Department);
exports.Department = Department;
//# sourceMappingURL=Department.js.map