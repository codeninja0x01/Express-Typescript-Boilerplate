"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const PaginationRequest_1 = require("./PaginationRequest");
class SearchRequest extends PaginationRequest_1.PaginationRequest {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], SearchRequest.prototype, "search", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], SearchRequest.prototype, "descLength", void 0);
exports.SearchRequest = SearchRequest;
//# sourceMappingURL=SearchRequest.js.map