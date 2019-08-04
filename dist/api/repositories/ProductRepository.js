"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Product_1 = require("../models/Product");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
};
ProductRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Product_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map