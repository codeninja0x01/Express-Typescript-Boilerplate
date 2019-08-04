"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let OrderInput = class OrderInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], OrderInput.prototype, "cartKey", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], OrderInput.prototype, "taxId", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], OrderInput.prototype, "shippingId", void 0);
OrderInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], OrderInput);
exports.OrderInput = OrderInput;
//# sourceMappingURL=OrderInput.js.map