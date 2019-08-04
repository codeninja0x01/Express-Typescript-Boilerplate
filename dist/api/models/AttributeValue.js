"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Attribute_1 = require("./Attribute");
const Product_1 = require("./Product");
let AttributeValue = class AttributeValue {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    tslib_1.__metadata("design:type", Number)
], AttributeValue.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], AttributeValue.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'attribute_id' }),
    tslib_1.__metadata("design:type", Number)
], AttributeValue.prototype, "attributeId", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(() => Attribute_1.Attribute, attribute => attribute.values),
    typeorm_1.JoinColumn({ name: 'attribute_id' }),
    tslib_1.__metadata("design:type", Attribute_1.Attribute)
], AttributeValue.prototype, "attribute", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => Product_1.Product, product => product.attributes),
    tslib_1.__metadata("design:type", Array)
], AttributeValue.prototype, "products", void 0);
AttributeValue = tslib_1.__decorate([
    typeorm_1.Entity()
], AttributeValue);
exports.AttributeValue = AttributeValue;
//# sourceMappingURL=AttributeValue.js.map