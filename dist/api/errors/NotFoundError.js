"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class NotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'Not found!');
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map