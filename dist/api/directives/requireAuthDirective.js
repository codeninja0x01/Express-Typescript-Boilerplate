"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_core_1 = require("apollo-server-core");
const graphql_1 = require("graphql");
const graphql_tools_1 = require("graphql-tools");
class RequireAuthDirective extends graphql_tools_1.SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = graphql_1.defaultFieldResolver } = field;
        const { role } = this.args;
        field.resolve = (...args) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [, , ctx] = args;
            if (ctx.req && ctx.req.user) {
                if (role && (!ctx.req.user.role || !ctx.req.user.role.includes(role))) {
                    throw new apollo_server_core_1.AuthenticationError('You are not authorized to view this resource.');
                }
                else {
                    const result = yield resolve.apply(this, args);
                    return result;
                }
            }
            else {
                throw new apollo_server_core_1.AuthenticationError('You must be signed in to view this resource.');
            }
        });
    }
}
exports.RequireAuthDirective = RequireAuthDirective;
//# sourceMappingURL=requireAuthDirective.js.map