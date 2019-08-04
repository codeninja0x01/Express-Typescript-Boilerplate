"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Product_1 = require("../models/Product");
const Review_1 = require("../models/Review");
const ReviewRepository_1 = require("../repositories/ReviewRepository");
const AttributeService_1 = require("../services/AttributeService");
const CategoryService_1 = require("../services/CategoryService");
const ProductService_1 = require("../services/ProductService");
const PaginationInput_1 = require("../types/input/PaginationInput");
const ReviewInput_1 = require("../types/input/ReviewInput");
const SearchInput_1 = require("../types/input/SearchInput");
const Product_2 = require("../types/Product");
const Review_2 = require("../types/Review");
let ProductResolver = class ProductResolver {
    constructor(productService, attributeService, categoryService, reviewRepository) {
        this.productService = productService;
        this.attributeService = attributeService;
        this.categoryService = categoryService;
        this.reviewRepository = reviewRepository;
    }
    /** TODO Authentication */
    addReview(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const review = new Review_1.Review();
            review.rating = body.rating;
            review.review = body.review;
            review.productId = body.productId;
            review.customerId = body.customerId;
            return this.reviewRepository.save(review);
        });
    }
    getProducts(query) {
        return this.productService.find(query);
    }
    getProduct(id, { customer }) {
        return this.productService.findOne(id);
    }
    searchProduct(query) {
        return this.productService.search(query);
    }
    attributes(product) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.attributeService.findProduct(product.id);
        });
    }
    categories(product) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.categoryService.findProduct(product.id);
        });
    }
    reviews(product) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.productService.findReview(product.id);
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Review_2.Review),
    tslib_1.__param(0, type_graphql_1.Arg('review')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReviewInput_1.ReviewInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "addReview", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => [Product_2.Product]),
    tslib_1.__param(0, type_graphql_1.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PaginationInput_1.PaginationInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => Product_2.Product || undefined),
    tslib_1.__param(0, type_graphql_1.Arg('id', { nullable: false })), tslib_1.__param(1, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProduct", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => [Product_2.Product]),
    tslib_1.__param(0, type_graphql_1.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SearchInput_1.SearchInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "searchProduct", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "attributes", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "categories", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductResolver.prototype, "reviews", null);
ProductResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(() => Product_2.Product),
    tslib_1.__param(3, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__metadata("design:paramtypes", [ProductService_1.ProductService,
        AttributeService_1.AttributeService,
        CategoryService_1.CategoryService,
        ReviewRepository_1.ReviewRepository])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=ProductResolver.js.map