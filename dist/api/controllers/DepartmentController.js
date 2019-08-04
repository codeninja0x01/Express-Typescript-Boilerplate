"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const DepartmentService_1 = require("../services/DepartmentService");
const IdRequest_1 = require("./requests/IdRequest");
let DepartmentController = class DepartmentController {
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    find() {
        return this.departmentService.find();
    }
    one(idRequest) {
        return this.departmentService.findOne(idRequest.id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], DepartmentController.prototype, "one", null);
DepartmentController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/departments'),
    tslib_1.__metadata("design:paramtypes", [DepartmentService_1.DepartmentService])
], DepartmentController);
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=DepartmentController.js.map