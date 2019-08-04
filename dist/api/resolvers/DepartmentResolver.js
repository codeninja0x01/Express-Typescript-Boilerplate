"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const Logger_1 = require("../../decorators/Logger");
const Department_1 = require("../models/Department");
const CategoryService_1 = require("../services/CategoryService");
const DepartmentService_1 = require("../services/DepartmentService");
const ProductService_1 = require("../services/ProductService");
const Department_2 = require("../types/Department");
const PaginationInput_1 = require("../types/input/PaginationInput");
let DepartmentResolver = class DepartmentResolver {
    constructor(departmentService, categoryService, productService, log) {
        this.departmentService = departmentService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.log = log;
    }
    getDepartments({ requestId }) {
        this.log.info(`{${requestId}} Find all department`);
        return this.departmentService.find();
    }
    getDepartment(id) {
        this.log.info(`Find one department`);
        return this.departmentService.findOne(id);
    }
    categories(department) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.categoryService.findDepartment(department.id);
        });
    }
    products(department, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.productService.findDepartment(department.id, query);
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [Department_2.Department]),
    tslib_1.__param(0, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "getDepartments", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => [Department_2.Department]),
    tslib_1.__param(0, type_graphql_1.Arg('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "getDepartment", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Department_1.Department]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "categories", null);
tslib_1.__decorate([
    type_graphql_1.FieldResolver(),
    tslib_1.__param(0, type_graphql_1.Root()), tslib_1.__param(1, type_graphql_1.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Department_1.Department, PaginationInput_1.PaginationInput]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentResolver.prototype, "products", null);
DepartmentResolver = tslib_1.__decorate([
    typedi_1.Service(),
    type_graphql_1.Resolver(of => Department_2.Department),
    tslib_1.__param(3, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [DepartmentService_1.DepartmentService,
        CategoryService_1.CategoryService,
        ProductService_1.ProductService, Object])
], DepartmentResolver);
exports.DepartmentResolver = DepartmentResolver;
//# sourceMappingURL=DepartmentResolver.js.map