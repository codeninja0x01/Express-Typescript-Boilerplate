import {
    Authorized, Body, CurrentUser, Get, JsonController, OnUndefined, Params, Post
} from 'routing-controllers';

import { NotFoundError } from '../errors/NotFoundError';
import { Customer } from '../models/Customer';
import { Order } from '../models/Order';
import { OrderDetail } from '../models/OrderDetail';
import { OrderService } from '../services/OrderService';
import { IdRequest } from './requests/IdRequest';
import { OrderRequest } from './requests/OrderRequest';

@Authorized()
@JsonController('/orders')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Post()
    public save(
        @CurrentUser({required: true }) customer: Customer,
        @Body() order: OrderRequest
    ): Promise<object | undefined> {
        console.log(customer);
        return this.orderService.save(order, customer);
    }

    @Get('/customer')
    @OnUndefined(NotFoundError)
    public customer( @CurrentUser({ required: true }) customer: Customer
    ): Promise<Order[] | undefined> {
        return this.orderService.customer(customer);
    }

    @Get('/detail/:id')
    @OnUndefined(NotFoundError)
    public one(@Params() idRequest: IdRequest): Promise<OrderDetail | undefined> {
        return this.orderService.findOne(idRequest.id);
    }

    @Get('/:id')
    @OnUndefined(NotFoundError)
    public detail(@Params() idRequest: IdRequest): Promise<Order | undefined> {
        return this.orderService.detail(idRequest.id);
    }

}
