"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Category_1 = require("../models/Category");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    /**
     * Find by department_id is used for our data-loader to get all needed category in one query.
     */
    findByDepartmentIds(ids) {
        return this.createQueryBuilder()
            .select()
            .where(`category.department_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }
};
CategoryRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Category_1.Category)
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=CategoryRepository.js.map