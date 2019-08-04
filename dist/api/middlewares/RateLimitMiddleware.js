"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_rate_limit_1 = tslib_1.__importDefault(require("express-rate-limit"));
const routing_controllers_1 = require("routing-controllers");
let RateLimitMiddleware = class RateLimitMiddleware {
    use(req, res, next) {
        return express_rate_limit_1.default({
            windowMs: 15 * 60 * 1000,
            max: 100,
        })(req, res, next);
    }
};
RateLimitMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], RateLimitMiddleware);
exports.RateLimitMiddleware = RateLimitMiddleware;
//# sourceMappingURL=RateLimitMiddleware.js.map