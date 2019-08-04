"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dataloader_1 = tslib_1.__importDefault(require("dataloader"));
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const DLoader_1 = require("../../decorators/DLoader");
const Logger_1 = require("../../decorators/Logger");
const Category_1 = require("../models/Category");
const Department_1 = require("../models/Department");
const CategoryService_1 = require("../services/CategoryService");
const ProductService_1 = require("../services/ProductService");
const Category_2 = require("../types/Category");
const PaginationInput_1 = require("../types/input/PaginationInput");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService, productService, CategoryLoader, log) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.CategoryLoader = CategoryLoader;
        this.log = log;
    }
    getCategories(query) {
        this.log.info(`Find all Category`);
        return this.categoryService.find(query);
    }
    getCategory(id) {
        this.log.info(`Find one Category`);
        return this.categoryService.findOne(id);
    }
    department(category) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (category.departmentId === undefined) {
                return undefined;
            }
            return this.CategoryLoader.load(category.departmentId);
        });
    }
    products(category, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.productService.findCategory(category.id, query);
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [Category_2.Category]),
    tslib_1.__param(0, type_graphql_1.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PaginationInput_1.PaginationInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategories", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => [Category_2.Category]),
    tslib_1.__param(0, type_graphql_1.Arg('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getCategory", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Category_1.Category]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryResolver.prototype, "department", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()), tslib_1.__param(1, type_graphql_1.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Category_1.Category, PaginationInput_1.PaginationInput]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryResolver.prototype, "products", null);
CategoryResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(of => Category_2.Category),
    tslib_1.__param(2, DLoader_1.DLoader(Department_1.Department)),
    tslib_1.__param(3, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CategoryService_1.CategoryService,
        ProductService_1.ProductService,
        dataloader_1.default, Object])
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=CategoryResolver.js.map