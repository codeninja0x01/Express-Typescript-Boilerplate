"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const Customer_1 = require("../models/Customer");
const Review_1 = require("../models/Review");
const ProductService_1 = require("../services/ProductService");
const IdRequest_1 = require("./requests/IdRequest");
const PaginationRequest_1 = require("./requests/PaginationRequest");
const SearchRequest_1 = require("./requests/SearchRequest");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    find(query) {
        return this.productService.find(query);
    }
    search(query) {
        return this.productService.search(query);
    }
    one(idRequest) {
        return this.productService.findOne(idRequest.id);
    }
    category(idRequest, query) {
        return this.productService.findCategory(idRequest.id, query);
    }
    department(idRequest, query) {
        return this.productService.findDepartment(idRequest.id, query);
    }
    location(idRequest) {
        return this.productService.findLocation(idRequest.id);
    }
    review(idRequest) {
        return this.productService.findReview(idRequest.id);
    }
    createReview(review, customer) {
        return this.productService.createReview(review, customer);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PaginationRequest_1.PaginationRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/search'),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SearchRequest_1.SearchRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "search", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id/detail'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/category/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()), tslib_1.__param(1, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest, PaginationRequest_1.PaginationRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "category", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/department/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()), tslib_1.__param(1, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest, PaginationRequest_1.PaginationRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "department", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id/locations'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "location", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id/reviews'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "review", null);
tslib_1.__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.Post('/reviews'),
    tslib_1.__param(0, routing_controllers_1.Body()), tslib_1.__param(1, routing_controllers_1.CurrentUser({ required: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Review_1.Review, Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "createReview", null);
ProductController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/products'),
    tslib_1.__metadata("design:paramtypes", [ProductService_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map