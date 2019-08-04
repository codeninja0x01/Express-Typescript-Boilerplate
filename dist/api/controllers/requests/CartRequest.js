"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CartRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['create'] }),
    tslib_1.__metadata("design:type", String)
], CartRequest.prototype, "attribute", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['create'] }),
    tslib_1.__metadata("design:type", String)
], CartRequest.prototype, "cartKey", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['create'] }),
    tslib_1.__metadata("design:type", Number)
], CartRequest.prototype, "productId", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({ groups: ['update'] }),
    tslib_1.__metadata("design:type", Number)
], CartRequest.prototype, "quantity", void 0);
exports.CartRequest = CartRequest;
//# sourceMappingURL=CartRequest.js.map