import { Authorized, Body, CurrentUser, Get, JsonController, Post, Put } from 'routing-controllers';

import { Customer } from '../models/Customer';
import { CustomerService } from '../services/CustomerService';

@JsonController('/customers')
export class CustomerController {

    constructor(
        private customerService: CustomerService
    ) { }

    @Post()
    public async register(@Body({ validate: true}) formData: Customer):  Promise<{ customer, expires_in, accessToken }> {
        return await this.customerService.create(formData);
    }

    @Put()
    @Authorized()
    public update(@Body({ validate: {groups: ['update']}}) formData: Customer,
                  @CurrentUser({required: true}) customer: Customer): Promise<Customer> {
        return this.customerService.update(formData, customer.id);
    }

    @Post('/address')
    @Authorized()
    public address(@Body({required: true, validate: {groups: ['address']}}) formData: Customer,
                   @CurrentUser({required: true}) customer: Customer): Promise<Customer> {
        return this.customerService.address(formData, customer.id);
    }

    @Post('/card')
    @Authorized()
    public card(@Body({required: true, validate: {groups: ['card']}}) formData: Customer,
                @CurrentUser({required: true}) customer: Customer): Promise<Customer> {
        return this.customerService.card(formData, customer.id);
    }

    @Post('/login')
    public login(@Body({validate: {groups: ['login']}}) customer: Customer):  Promise<{ customer, expires_in, accessToken }> {
        return this.customerService.login(customer);
    }

    @Get()
    @Authorized()
    public async current(@CurrentUser({required: true}) customer: Customer): Promise<Customer> {
        return await this.customerService.find(customer.email);
    }
}
