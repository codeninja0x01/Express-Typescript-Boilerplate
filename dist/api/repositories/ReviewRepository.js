"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Review_1 = require("../models/Review");
let ReviewRepository = class ReviewRepository extends typeorm_1.Repository {
};
ReviewRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Review_1.Review)
], ReviewRepository);
exports.ReviewRepository = ReviewRepository;
//# sourceMappingURL=ReviewRepository.js.map