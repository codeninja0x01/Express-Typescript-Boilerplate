"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Attribute_1 = require("../models/Attribute");
let AttributeRepository = class AttributeRepository extends typeorm_1.Repository {
};
AttributeRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Attribute_1.Attribute)
], AttributeRepository);
exports.AttributeRepository = AttributeRepository;
//# sourceMappingURL=AttributeRepository.js.map