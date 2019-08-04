"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const stripe_1 = require("stripe");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const EventDispatcher_1 = require("../../decorators/EventDispatcher");
const OrderRepository_1 = require("../repositories/OrderRepository");
const events_1 = require("../subscribers/events");
const stripe = new stripe_1.Stripe('sk_test_ft8nzuqMvME8Lyf48q4SIMHr00QhoPkLqm');
let StripeService = class StripeService {
    constructor(orderRepository, eventDispatcher) {
        this.orderRepository = orderRepository;
        this.eventDispatcher = eventDispatcher;
        this.generate_payment_response = (intent, order) => {
            if (intent.status === 'requires_action' &&
                intent.next_action.type === 'use_stripe_sdk') {
                // Tell the client to handle the action
                return {
                    requires_action: true,
                    payment_intent_client_secret: intent.client_secret,
                };
            }
            else if (intent.status === 'succeeded') {
                // The payment didn’t need any additional actions and completed!
                // Handle post-payment fulfillment
                this.orderRepository.update({ id: order.id }, { status: 1, authCode: intent.id, comments: intent.description });
                this.eventDispatcher.dispatch(events_1.events.customer.order, order);
                return {
                    success: true,
                };
            }
            else {
                // Invalid status
                return {
                    error: 'Invalid PaymentIntent status',
                };
            }
        };
    }
    charge(stripeR) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let intent;
            const order = yield this.orderRepository.findOne(stripeR.orderId, { select: ['totalAmount', 'id', 'customerId'] });
            if (stripeR.paymentMethodId !== undefined) {
                intent = yield stripe.paymentIntents.create({
                    payment_method: stripeR.paymentMethodId,
                    amount: order.totalAmount,
                    description: stripeR.description,
                    currency: stripeR.currency,
                    confirmation_method: 'manual',
                    confirm: true,
                });
            }
            else if (stripeR.paymentIntentId !== undefined) {
                intent = yield stripe.paymentIntents.confirm(stripeR.paymentIntentId);
            }
            return this.generate_payment_response(intent, order);
        });
    }
};
StripeService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__metadata("design:paramtypes", [OrderRepository_1.OrderRepository,
        EventDispatcher_1.EventDispatcherInterface])
], StripeService);
exports.StripeService = StripeService;
//# sourceMappingURL=StripeService.js.map