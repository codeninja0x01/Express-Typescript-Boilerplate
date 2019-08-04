"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const CategoryService_1 = require("../services/CategoryService");
const IdRequest_1 = require("./requests/IdRequest");
const PaginationRequest_1 = require("./requests/PaginationRequest");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    find(query) {
        return this.categoryService.find(query);
    }
    one(idRequest) {
        return this.categoryService.findOne(idRequest.id);
    }
    product(idRequest) {
        return this.categoryService.findProduct(idRequest.id);
    }
    department(idRequest) {
        return this.categoryService.findDepartment(idRequest.id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PaginationRequest_1.PaginationRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/product/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "product", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/department/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "department", null);
CategoryController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/categories'),
    tslib_1.__metadata("design:paramtypes", [CategoryService_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=CategoryController.js.map