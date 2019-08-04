import { Action } from 'routing-controllers';
import { Connection } from 'typeorm';

import { Customer } from '../api/models/Customer';

export function currentCustomerChecker(connection: Connection): (action: Action) => Promise<Customer | undefined> {
    return async function innerCurrentCustomerChecker(action: Action): Promise<Customer | undefined> {
        return action.request.user;
    };
}
