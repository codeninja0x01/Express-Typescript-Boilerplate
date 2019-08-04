"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const NotFoundError_1 = require("../errors/NotFoundError");
const TaxService_1 = require("../services/TaxService");
const IdRequest_1 = require("./requests/IdRequest");
let TaxController = class TaxController {
    constructor(taxService) {
        this.taxService = taxService;
    }
    find() {
        return this.taxService.find();
    }
    one(idRequest) {
        return this.taxService.findOne(idRequest.id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TaxController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(NotFoundError_1.NotFoundError),
    tslib_1.__param(0, routing_controllers_1.Params()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IdRequest_1.IdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], TaxController.prototype, "one", null);
TaxController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/tax'),
    tslib_1.__metadata("design:paramtypes", [TaxService_1.TaxService])
], TaxController);
exports.TaxController = TaxController;
//# sourceMappingURL=TaxController.js.map