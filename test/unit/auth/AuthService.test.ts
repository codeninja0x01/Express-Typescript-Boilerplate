import { Request } from 'express';
import jwt from 'jsonwebtoken';
import MockExpressRequest from 'mock-express-request';

import { Customer } from '../../../src/api/models/Customer';
import { AuthService } from '../../../src/auth/AuthService';
import { env } from '../../../src/env';
import { LogMock } from '../lib/LogMock';
import { RepositoryMock } from '../lib/RepositoryMock';

describe('AuthService', () => {

    let authService: AuthService;
    let userRepository: RepositoryMock<Customer>;
    let log: LogMock;
    beforeEach(async () => {
        log = new LogMock();
        userRepository = new RepositoryMock<Customer>();
        authService = new AuthService(log, userRepository as any);
    });

    describe('parseTokenFromRequest', () => {
        test('Should return the encoded customer credential of the Bearer authorization header', async () => {
            const token = await jwt.sign({
                email: 'bruce.wayne@wayne-enterprises.com',
                name: 'Bruce Wayne',
            }, env.jwt.secret, {
                expiresIn: 60 * 60,
            });
            const req: Request = new MockExpressRequest({
                headers: {
                    'USER-KEY': 'Bearer ' + token,
                },
            });
            const credentials = await authService.parseBearerAuthFromRequest(req);
            expect(credentials.email).toBe('bruce.wayne@wayne-enterprises.com');
            expect(credentials.name).toBe('Bruce Wayne');
        });

        test('Should return undefined if there is no Bearer authorization header', async () => {
            const req: Request = new MockExpressRequest({
                headers: {},
            });
            const token = await authService.parseBearerAuthFromRequest(req);
            expect(token).toBeUndefined();
            expect(log.infoMock).toBeCalledWith('No credentials provided by the client', []);
        });

        test('Should throw BadRequestError if there is a invalid Bearer authorization header', async () => {
            const req: Request = new MockExpressRequest({
                headers: {
                    'USER-KEY': 'Bearer 1234',
                },
            });
            authService.parseBearerAuthFromRequest(req).catch(e => {
                expect(e.message).toBe('Invalid credentials given');
                expect(log.infoMock).toBeCalledWith('Invalid credentials given', []);
            });
        });

    });

});
