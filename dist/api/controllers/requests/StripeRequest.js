"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
var CURRENCY;
(function (CURRENCY) {
    CURRENCY["USD"] = "USD";
    CURRENCY["ERO"] = "EUR";
})(CURRENCY || (CURRENCY = {}));
class StripeRequest {
    constructor() {
        this.currency = CURRENCY.USD;
    }
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], StripeRequest.prototype, "orderId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(CURRENCY),
    tslib_1.__metadata("design:type", String)
], StripeRequest.prototype, "currency", void 0);
exports.StripeRequest = StripeRequest;
//# sourceMappingURL=StripeRequest.js.map