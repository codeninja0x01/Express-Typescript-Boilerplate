"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let ReviewInput = class ReviewInput {
};
tslib_1.__decorate([
    class_validator_1.IsString(),
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ReviewInput.prototype, "review", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], ReviewInput.prototype, "rating", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], ReviewInput.prototype, "productId", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], ReviewInput.prototype, "customerId", void 0);
ReviewInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], ReviewInput);
exports.ReviewInput = ReviewInput;
//# sourceMappingURL=ReviewInput.js.map