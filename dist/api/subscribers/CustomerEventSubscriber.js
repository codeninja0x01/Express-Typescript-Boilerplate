"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const nodemailer_1 = require("nodemailer");
const logger_1 = require("../../helper/logger");
const Customer_1 = require("../models/Customer");
const Order_1 = require("../models/Order");
const events_1 = require("./events");
const log = new logger_1.Logger(__filename);
let CustomerEventSubscriber = class CustomerEventSubscriber {
    onCustomerCreated(customer) {
        log.info('customer ' + customer.toString() + ' created!');
    }
    onCustomerOrder(order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const testAccount = yield nodemailer_1.createTestAccount();
            const transport = nodemailer_1.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
            const info = yield transport.sendMail({
                from: '',
                to: '',
                subject: '',
                text: '',
                html: '',
            });
            log.info('Message sent: %s', info.messageId);
        });
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.customer.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Customer_1.Customer]),
    tslib_1.__metadata("design:returntype", void 0)
], CustomerEventSubscriber.prototype, "onCustomerCreated", null);
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.customer.order),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerEventSubscriber.prototype, "onCustomerOrder", null);
CustomerEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], CustomerEventSubscriber);
exports.CustomerEventSubscriber = CustomerEventSubscriber;
//# sourceMappingURL=CustomerEventSubscriber.js.map