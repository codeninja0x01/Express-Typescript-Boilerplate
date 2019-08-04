import { Body, JsonController, Post } from 'routing-controllers';

import { StripeService } from '../services/StripeService';
import { StripeRequest } from './requests/StripeRequest';

@JsonController('/stripe')
export class StripeController {

    constructor(
        private stripeService: StripeService
    ) { }

    @Post('/charge')
    public charge(@Body() stripe: StripeRequest): Promise<void> {
        return this.stripeService.charge(stripe);
    }

}
