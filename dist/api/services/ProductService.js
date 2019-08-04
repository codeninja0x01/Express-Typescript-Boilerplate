"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const Department_1 = require("../models/Department");
const CategoryRepository_1 = require("../repositories/CategoryRepository");
const ProductRepository_1 = require("../repositories/ProductRepository");
const ReviewRepository_1 = require("../repositories/ReviewRepository");
let ProductService = class ProductService {
    constructor(productRepository, categoryRepository, reviewRepository, log) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.reviewRepository = reviewRepository;
        this.log = log;
    }
    find(query) {
        this.log.info('Find all product');
        const limit = query.limit ? query.limit : 20;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;
        return this.productRepository
            .createQueryBuilder()
            .take(limit)
            .orderBy(query.order, query.orderBy)
            .skip(offset)
            .getMany();
    }
    findOne(id) {
        this.log.info('Find one product');
        return this.productRepository.findOne({ id });
    }
    search(query) {
        this.log.info('Search product');
        const limit = query.limit ? query.limit : 20;
        const descLength = query.descLength ? query.descLength : 200;
        const offset = ((query.offset ? query.offset : 1) - 1) * limit;
        return this.productRepository
            .createQueryBuilder()
            .select(['id', 'name', 'price', 'discounted_price', 'thumbnail'])
            .addSelect('IF(LENGTH(description) <= :length, description, CONCAT(LEFT(description, :length), \' ...\'))', 'description')
            .where('MATCH (name, description) AGAINST (:str IN BOOLEAN MODE)')
            .orderBy('MATCH (name, description) AGAINST (:str IN NATURAL LANGUAGE MODE)', 'DESC')
            .setParameter('str', query.search)
            .setParameter('length', descLength)
            .skip(offset)
            .take(limit)
            .getRawMany();
    }
    findCategory(categoryId, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find product by category');
            const limit = query.limit ? query.limit : 20;
            const offset = ((query.offset ? query.offset : 1) - 1) * limit;
            const products = yield this.productRepository
                .createQueryBuilder('product')
                .innerJoin('product.categories', 'category')
                .take(limit)
                .skip(offset)
                .where('category.id = :categoryId', { categoryId })
                .cache({ id: 'category_products', milliseconds: 6000 })
                .getMany();
            return products;
        });
    }
    findDepartment(departmentId, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find product by category');
            const limit = query.limit ? query.limit : 20;
            const offset = ((query.offset ? query.offset : 1) - 1) * limit;
            const products = yield this.productRepository
                .createQueryBuilder('product')
                .innerJoin('product.categories', 'category')
                .take(limit)
                .skip(offset)
                .where('category.departmentId = :departmentId', { departmentId })
                .getMany();
            return products;
        });
    }
    findLocation(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find product by category');
            const products = yield this.categoryRepository
                .createQueryBuilder('category')
                .select(['category.id', 'category.name', 'category.department_id'])
                .addSelect(subQuery => {
                return subQuery.select('name').from(Department_1.Department, 'department').where('id = category.department_id');
            }, 'department_name')
                .where(qb => {
                const subQuery = qb.subQuery()
                    .select('category_id')
                    .from('product_categories', 'product_category')
                    .where('product_id = :id')
                    .getQuery();
                return 'category.id IN ' + subQuery;
            })
                .setParameter('id', id)
                .getRawMany();
            return products;
        });
    }
    findReview(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find product review');
            const reviews = yield this.reviewRepository
                .createQueryBuilder('review')
                .innerJoin('review.customer', 'customer')
                .select('customer.name')
                .addSelect('review.review', 'review')
                .addSelect('review.rating', 'rating')
                .addSelect('review.created_on', 'created_on')
                .where('review.product_id = :id', { id })
                .getRawMany();
            return reviews;
        });
    }
    createReview(review, customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create product review');
            review.customerId = customer.id;
            yield this.reviewRepository.save(review);
            return this.findReview(review.productId);
        });
    }
};
ProductService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(2, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(3, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ProductRepository_1.ProductRepository,
        CategoryRepository_1.CategoryRepository,
        ReviewRepository_1.ReviewRepository, Object])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map