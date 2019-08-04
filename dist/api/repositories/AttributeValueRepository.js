"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const AttributeValue_1 = require("../models/AttributeValue");
let AttributeValueRepository = class AttributeValueRepository extends typeorm_1.Repository {
    /**
     * Find by user_id is used for our data-loader to get all needed pets in one query.
     */
    findByAttributeIds(ids) {
        return this.createQueryBuilder()
            .select()
            .where(`attribute_value.attribute_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }
};
AttributeValueRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(AttributeValue_1.AttributeValue)
], AttributeValueRepository);
exports.AttributeValueRepository = AttributeValueRepository;
//# sourceMappingURL=AttributeValueRepository.js.map