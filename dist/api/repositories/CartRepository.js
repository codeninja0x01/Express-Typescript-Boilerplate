"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Cart_1 = require("../models/Cart");
let CartRepository = class CartRepository extends typeorm_1.Repository {
};
CartRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Cart_1.Cart)
], CartRepository);
exports.CartRepository = CartRepository;
//# sourceMappingURL=CartRepository.js.map