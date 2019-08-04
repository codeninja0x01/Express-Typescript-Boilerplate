"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Order_1 = require("./Order");
let Audit = class Audit {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    tslib_1.__metadata("design:type", Number)
], Audit.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "message", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "code", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => Order_1.Order),
    tslib_1.__metadata("design:type", Order_1.Order)
], Audit.prototype, "order", void 0);
Audit = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], Audit);
exports.Audit = Audit;
//# sourceMappingURL=Audit.js.map