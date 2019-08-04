import { Stripe } from 'stripe';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { StripeRequest } from '../controllers/requests/StripeRequest';
import { Order } from '../models/Order';
import { OrderRepository } from '../repositories/OrderRepository';
import { events } from '../subscribers/events';

const stripe = new Stripe('sk_test_ft8nzuqMvME8Lyf48q4SIMHr00QhoPkLqm');

@Service()
export class StripeService {

    constructor(
        @OrmRepository() private orderRepository: OrderRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface
    ) {}

    public async charge(stripeR: StripeRequest): Promise<any> {
        let intent;

        const order = await this.orderRepository.findOne(stripeR.orderId, {select: ['totalAmount', 'id', 'customerId']});

        if (stripeR.paymentMethodId !== undefined) {
            intent = await stripe.paymentIntents.create({
                payment_method: stripeR.paymentMethodId,
                amount: order.totalAmount,
                description: stripeR.description,
                currency: stripeR.currency,
                confirmation_method: 'manual',
                confirm: true,
            });
        } else if (stripeR.paymentIntentId !== undefined) {
            intent = await stripe.paymentIntents.confirm(stripeR.paymentIntentId);
        }
        return this.generate_payment_response(intent, order);
    }

    public generate_payment_response = (intent, order: Order) => {
        if (
          intent.status === 'requires_action' &&
          intent.next_action.type === 'use_stripe_sdk'
        ) {
          // Tell the client to handle the action
          return {
            requires_action: true,
            payment_intent_client_secret: intent.client_secret,
          };
        } else if (intent.status === 'succeeded') {
          // The payment didn’t need any additional actions and completed!
          // Handle post-payment fulfillment
          this.orderRepository.update({id: order.id}, {status: 1, authCode: intent.id, comments: intent.description});
          this.eventDispatcher.dispatch(events.customer.order, order);
          return {
            success: true,
          };
        } else {
          // Invalid status
          return {
            error: 'Invalid PaymentIntent status',
          };
        }
      }
}
