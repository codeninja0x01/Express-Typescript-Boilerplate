"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const logger_1 = require("../helper/logger");
const AuthService_1 = require("./AuthService");
function authorizationChecker(connection) {
    const log = new logger_1.Logger(__filename);
    const authService = typedi_1.Container.get(AuthService_1.AuthService);
    return function innerAuthorizationChecker(action, roles) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // here you can use request/response objects from action
            // also if decorator defines roles it needs to access the action
            // you can use them to provide granular access check
            // checker must return either boolean (true or false)
            // either promise that resolves a boolean value
            const credentials = yield authService.parseBearerAuthFromRequest(action.request);
            if (credentials === undefined) {
                log.warn('No credentials given');
                return false;
            }
            action.request.user = yield authService.validateCustomer(credentials.email);
            if (action.request.user === undefined) {
                log.warn('Customer cannot found');
                return false;
            }
            log.info('Successfully checked credentials');
            return true;
        });
    };
}
exports.authorizationChecker = authorizationChecker;
exports.authorizationGrahpql = ({ root, args, context, info }, roles) => {
    // here we can read the user from context
    // and check his permission in the db against the `roles` argument
    // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
    return true; // or false if access is denied
};
//# sourceMappingURL=authorizationChecker.js.map