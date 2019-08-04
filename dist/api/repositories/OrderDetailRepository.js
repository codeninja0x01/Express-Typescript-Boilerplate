"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const OrderDetail_1 = require("../models/OrderDetail");
let OrderDetailRepository = class OrderDetailRepository extends typeorm_1.Repository {
};
OrderDetailRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(OrderDetail_1.OrderDetail)
], OrderDetailRepository);
exports.OrderDetailRepository = OrderDetailRepository;
//# sourceMappingURL=OrderDetailRepository.js.map