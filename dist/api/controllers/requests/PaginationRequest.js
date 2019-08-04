"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
var ORDER_BY;
(function (ORDER_BY) {
    ORDER_BY["asc"] = "ASC";
    ORDER_BY["desc"] = "DESC";
})(ORDER_BY || (ORDER_BY = {}));
var ORDER;
(function (ORDER) {
    ORDER["id"] = "id";
    ORDER["name"] = "name";
})(ORDER || (ORDER = {}));
class PaginationRequest {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    tslib_1.__metadata("design:type", Number)
], PaginationRequest.prototype, "offset", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumberString(),
    tslib_1.__metadata("design:type", Number)
], PaginationRequest.prototype, "limit", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(ORDER_BY),
    tslib_1.__metadata("design:type", String)
], PaginationRequest.prototype, "orderBy", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(ORDER),
    tslib_1.__metadata("design:type", String)
], PaginationRequest.prototype, "order", void 0);
exports.PaginationRequest = PaginationRequest;
//# sourceMappingURL=PaginationRequest.js.map