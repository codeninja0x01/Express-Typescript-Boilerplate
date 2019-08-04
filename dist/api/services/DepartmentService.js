"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const DepartmentRepository_1 = require("../repositories/DepartmentRepository");
let DepartmentService = class DepartmentService {
    constructor(departmentRepository, log) {
        this.departmentRepository = departmentRepository;
        this.log = log;
    }
    find() {
        this.log.info('Find all department');
        return this.departmentRepository.find();
    }
    findOne(id) {
        this.log.info('Find one department');
        return this.departmentRepository.findOne({ id });
    }
};
DepartmentService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [DepartmentRepository_1.DepartmentRepository, Object])
], DepartmentService);
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=DepartmentService.js.map