"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Tax_1 = require("../models/Tax");
let TaxRepository = class TaxRepository extends typeorm_1.Repository {
};
TaxRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Tax_1.Tax)
], TaxRepository);
exports.TaxRepository = TaxRepository;
//# sourceMappingURL=TaxRepository.js.map