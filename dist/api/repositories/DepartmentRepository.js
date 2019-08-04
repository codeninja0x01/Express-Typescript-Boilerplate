"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Department_1 = require("../models/Department");
let DepartmentRepository = class DepartmentRepository extends typeorm_1.Repository {
};
DepartmentRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Department_1.Department)
], DepartmentRepository);
exports.DepartmentRepository = DepartmentRepository;
//# sourceMappingURL=DepartmentRepository.js.map