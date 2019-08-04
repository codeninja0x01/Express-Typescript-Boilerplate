"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const EventDispatcher_1 = require("../../decorators/EventDispatcher");
const Logger_1 = require("../../decorators/Logger");
const env_1 = require("../../env");
const Customer_1 = require("../models/Customer");
const CustomerRepository_1 = require("../repositories/CustomerRepository");
const events_1 = require("../subscribers/events");
let CustomerService = class CustomerService {
    constructor(customerRepository, eventDispatcher, log) {
        this.customerRepository = customerRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    create(customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create customer');
            const customerData = yield this.customerRepository.save(customer);
            const customerToken = yield this.customerToken(customerData);
            this.eventDispatcher.dispatch(events_1.events.customer.created, customerToken);
            return customerToken;
        });
    }
    update({ email, name, evePhone, dayPhone, mobPhone }, customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Update customer');
            yield this.customerRepository.update({ id: customerId }, { email, name, evePhone, mobPhone, dayPhone });
            return yield this.customerRepository.findOne({ id: customerId });
        });
    }
    address({ address1, address2, city, country, postalCode, region }, customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Update address');
            yield this.customerRepository.update({ id: customerId }, { address1, address2, city, country, postalCode, region });
            return yield this.customerRepository.findOne({ id: customerId });
        });
    }
    card({ creditCard }, customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Update credit card');
            yield this.customerRepository.update({ id: customerId }, { creditCard });
            return yield this.customerRepository.findOne({ id: customerId });
        });
    }
    all() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.customerRepository.find();
        });
    }
    find(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customerRepository.findOne({ where: { email } });
            return customer;
        });
    }
    login(customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Login');
            const existCustomer = yield this.find(customer.email);
            const compare = yield Customer_1.Customer.comparePassword(existCustomer, customer.password);
            if (!compare) {
                return undefined;
            }
            return this.customerToken(existCustomer);
        });
    }
    customerToken(customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = {
                email: customer.email,
                name: customer.name,
            };
            const token = yield jsonwebtoken_1.default.sign(payload, env_1.env.jwt.secret, {
                expiresIn: 60 * 60,
            });
            return {
                customer,
                expires_in: '1H',
                accessToken: 'Bearer ' + token,
            };
        });
    }
};
CustomerService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CustomerRepository_1.CustomerRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=CustomerService.js.map