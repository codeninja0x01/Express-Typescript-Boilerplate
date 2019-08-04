import * as express from 'express';
import { verify } from 'jsonwebtoken';
import { BadRequestError } from 'routing-controllers';
import { Customer } from 'src/api/models/Customer';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { CustomerRepository } from '../api/repositories/CustomerRepository';
import { Logger, LoggerInterface } from '../decorators/Logger';
import { env } from '../env';

@Service()
export class AuthService {

    constructor(
        @Logger(__filename) private log: LoggerInterface,
        @OrmRepository() private customerRepository: CustomerRepository
    ) { }

    public async parseBearerAuthFromRequest(req: express.Request): Promise<{ email: string, name: string} | undefined> {
        const authorization = req.header('USER-KEY');

        if (authorization && authorization.split(' ')[0] === 'Bearer') {
            this.log.info('Credentials provided by the client');
            try {
                const decoded: any = await verify(authorization.split(' ')[1], env.jwt.secret);
                const { email, name } = decoded;
                if (email && name) {
                    return {email, name};
                }
            } catch (err) {
                this.log.info('Invalid credentials given');
                throw new BadRequestError('Invalid credentials given');
            }
        }

        this.log.info('No credentials provided by the client');
        return undefined;
    }

    public async validateCustomer(email: string): Promise<Customer> | undefined {
        const customer = await this.customerRepository.findOne({
            where: {
                email,
            },
            select: ['id', 'name', 'email', 'address1', 'mobPhone'],
        });
        return customer;
    }
}
