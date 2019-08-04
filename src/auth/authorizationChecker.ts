import { Action } from 'routing-controllers';
import { AuthChecker } from 'type-graphql';
import { Container } from 'typedi';
import { Connection } from 'typeorm';

import { Logger } from '../helper/logger';
import { AuthService } from './AuthService';
import { Context } from './context.interface';

export function authorizationChecker(connection: Connection): (action: Action, roles: any[])
    => Promise<boolean> | boolean {
    const log = new Logger(__filename);
    const authService = Container.get<AuthService>(AuthService);

    return async function innerAuthorizationChecker(action: Action, roles: string[]): Promise<boolean> {
        // here you can use request/response objects from action
        // also if decorator defines roles it needs to access the action
        // you can use them to provide granular access check
        // checker must return either boolean (true or false)
        // either promise that resolves a boolean value
        const credentials = await authService.parseBearerAuthFromRequest(action.request);

        if (credentials === undefined) {
            log.warn('No credentials given');
            return false;
        }

        action.request.user = await authService.validateCustomer(credentials.email);
        if (action.request.user === undefined) {
            log.warn('Customer cannot found');
            return false;
        }

        log.info('Successfully checked credentials');
        return true;
    };
}

export const authorizationGrahpql: AuthChecker<Context> = (
    { root, args, context, info },
    roles
  ) => {
    // here we can read the user from context
    // and check his permission in the db against the `roles` argument
    // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]
    return true; // or false if access is denied
  };
