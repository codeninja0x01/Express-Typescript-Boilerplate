import { AuthenticationError } from 'apollo-server-core';
import { defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';

export class RequireAuthDirective extends SchemaDirectiveVisitor {
    public visitFieldDefinition(field: any): void {
        const { resolve = defaultFieldResolver } = field;
        const { role } = this.args;
        field.resolve = async (...args) => {
            const [, , ctx] = args;
            if (ctx.req && ctx.req.user) {
                if (role && (!ctx.req.user.role || !ctx.req.user.role.includes(role))) {
                    throw new AuthenticationError(
                        'You are not authorized to view this resource.'
                    );
                } else {
                    const result = await resolve.apply(this, args);
                    return result;
                }
            } else {
                throw new AuthenticationError(
                    'You must be signed in to view this resource.'
                );
            }
        };
    }
}
