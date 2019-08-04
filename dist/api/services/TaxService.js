"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const TaxRepository_1 = require("../repositories/TaxRepository");
let TaxService = class TaxService {
    constructor(taxRepository, log) {
        this.taxRepository = taxRepository;
        this.log = log;
    }
    find() {
        this.log.info('Find all Tax');
        return this.taxRepository.find();
    }
    findOne(id) {
        this.log.info('Find one Tax');
        return this.taxRepository.findOne({ id });
    }
};
TaxService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [TaxRepository_1.TaxRepository, Object])
], TaxService);
exports.TaxService = TaxService;
//# sourceMappingURL=TaxService.js.map