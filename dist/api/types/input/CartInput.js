"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let CartInput = class CartInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CartInput.prototype, "attribute", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], CartInput.prototype, "cartKey", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], CartInput.prototype, "productId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], CartInput.prototype, "quantity", void 0);
CartInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], CartInput);
exports.CartInput = CartInput;
//# sourceMappingURL=CartInput.js.map