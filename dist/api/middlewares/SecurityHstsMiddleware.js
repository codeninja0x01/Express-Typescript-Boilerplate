"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const helmet = tslib_1.__importStar(require("helmet"));
const routing_controllers_1 = require("routing-controllers");
let SecurityHstsMiddleware = class SecurityHstsMiddleware {
    use(req, res, next) {
        return helmet.hsts({
            maxAge: 31536000,
            includeSubDomains: true,
        })(req, res, next);
    }
};
SecurityHstsMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], SecurityHstsMiddleware);
exports.SecurityHstsMiddleware = SecurityHstsMiddleware;
//# sourceMappingURL=SecurityHstsMiddleware.js.map