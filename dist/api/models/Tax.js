"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let Tax = class Tax {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Tax.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Tax.prototype, "type", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'double' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Tax.prototype, "percentage", void 0);
Tax = tslib_1.__decorate([
    typeorm_1.Entity()
], Tax);
exports.Tax = Tax;
//# sourceMappingURL=Tax.js.map