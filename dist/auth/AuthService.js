"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = require("jsonwebtoken");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const CustomerRepository_1 = require("../api/repositories/CustomerRepository");
const Logger_1 = require("../decorators/Logger");
const env_1 = require("../env");
let AuthService = class AuthService {
    constructor(log, customerRepository) {
        this.log = log;
        this.customerRepository = customerRepository;
    }
    parseBearerAuthFromRequest(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const authorization = req.header('USER-KEY');
            if (authorization && authorization.split(' ')[0] === 'Bearer') {
                this.log.info('Credentials provided by the client');
                try {
                    const decoded = yield jsonwebtoken_1.verify(authorization.split(' ')[1], env_1.env.jwt.secret);
                    const { email, name } = decoded;
                    if (email && name) {
                        return { email, name };
                    }
                }
                catch (err) {
                    this.log.info('Invalid credentials given');
                    throw new routing_controllers_1.BadRequestError('Invalid credentials given');
                }
            }
            this.log.info('No credentials provided by the client');
            return undefined;
        });
    }
    validateCustomer(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customerRepository.findOne({
                where: {
                    email,
                },
                select: ['id', 'name', 'email', 'address1', 'mobPhone'],
            });
            return customer;
        });
    }
};
AuthService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__metadata("design:paramtypes", [Object, CustomerRepository_1.CustomerRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map