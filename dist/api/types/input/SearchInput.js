"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const PaginationInput_1 = require("./PaginationInput");
let SearchInput = class SearchInput extends PaginationInput_1.PaginationInput {
};
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], SearchInput.prototype, "search", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    type_graphql_1.Field(() => type_graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], SearchInput.prototype, "descLength", void 0);
SearchInput = tslib_1.__decorate([
    type_graphql_1.ArgsType()
], SearchInput);
exports.SearchInput = SearchInput;
//# sourceMappingURL=SearchInput.js.map