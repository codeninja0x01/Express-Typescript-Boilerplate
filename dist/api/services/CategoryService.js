"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const CategoryRepository_1 = require("../repositories/CategoryRepository");
const ProductRepository_1 = require("../repositories/ProductRepository");
let CategoryService = class CategoryService {
    constructor(categoryRepository, productRepository, log) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.log = log;
    }
    find(query) {
        this.log.info('Find all category');
        const limit = query.limit ? query.limit : 20;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;
        return this.categoryRepository
            .createQueryBuilder()
            .limit(limit)
            .orderBy(query.order, query.orderBy)
            .offset(offset)
            .getMany();
    }
    findOne(id) {
        this.log.info('Find one category');
        return this.categoryRepository.findOne({ id });
    }
    findProduct(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find category products');
            const product = yield this.productRepository.findOne({ select: ['id'], relations: ['categories'], where: { id } });
            if (product === undefined || product.categories === undefined) {
                return undefined;
            }
            return product.categories;
        });
    }
    findDepartment(id) {
        this.log.info('Find category department');
        return this.categoryRepository.find({ where: { departmentId: id } });
    }
};
CategoryService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CategoryRepository_1.CategoryRepository,
        ProductRepository_1.ProductRepository, Object])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=CategoryService.js.map