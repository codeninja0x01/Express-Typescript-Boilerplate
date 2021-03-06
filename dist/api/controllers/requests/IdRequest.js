"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class IdRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    tslib_1.__metadata("design:type", Number)
], IdRequest.prototype, "id", void 0);
exports.IdRequest = IdRequest;
//# sourceMappingURL=IdRequest.js.map