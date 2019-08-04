"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function currentCustomerChecker(connection) {
    return function innerCurrentCustomerChecker(action) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return action.request.user;
        });
    };
}
exports.currentCustomerChecker = currentCustomerChecker;
//# sourceMappingURL=currentUserChecker.js.map