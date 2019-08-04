import { EventSubscriber, On } from 'event-dispatch';
import { createTestAccount, createTransport } from 'nodemailer';

import { Logger } from '../../helper/logger';
import { Customer } from '../models/Customer';
import { Order } from '../models/Order';
import { events } from './events';

const log = new Logger(__filename);

@EventSubscriber()
export class CustomerEventSubscriber {

    @On(events.customer.created)
    public onCustomerCreated(customer: Customer): void {
        log.info('customer ' + customer.toString() + ' created!');
    }

    @On(events.customer.order)
    public async onCustomerOrder(order: Order): Promise<void> {
        const testAccount = await createTestAccount();
        const transport = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
        const info = await transport.sendMail({
            from: '',
            to: '',
            subject: '',
            text: '',
            html: '',
        });
        log.info('Message sent: %s', info.messageId);
    }

}
