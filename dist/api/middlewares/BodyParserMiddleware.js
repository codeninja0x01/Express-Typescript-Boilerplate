"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const routing_controllers_1 = require("routing-controllers");
let BodyParserMiddleware = class BodyParserMiddleware {
    use(req, res, next) {
        return body_parser_1.default.urlencoded({ extended: false })(req, res, next);
    }
};
BodyParserMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], BodyParserMiddleware);
exports.BodyParserMiddleware = BodyParserMiddleware;
//# sourceMappingURL=BodyParserMiddleware.js.map