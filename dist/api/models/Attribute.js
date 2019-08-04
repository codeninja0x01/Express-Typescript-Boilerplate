"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const AttributeValue_1 = require("./AttributeValue");
let Attribute = class Attribute {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], Attribute.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], Attribute.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(() => AttributeValue_1.AttributeValue, value => value.attribute),
    tslib_1.__metadata("design:type", Array)
], Attribute.prototype, "values", void 0);
Attribute = tslib_1.__decorate([
    typeorm_1.Entity()
], Attribute);
exports.Attribute = Attribute;
//# sourceMappingURL=Attribute.js.map