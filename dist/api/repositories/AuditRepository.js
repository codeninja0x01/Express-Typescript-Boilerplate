"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Audit_1 = require("../models/Audit");
let AuditRepository = class AuditRepository extends typeorm_1.Repository {
};
AuditRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Audit_1.Audit)
], AuditRepository);
exports.AuditRepository = AuditRepository;
//# sourceMappingURL=AuditRepository.js.map