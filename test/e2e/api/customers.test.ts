import jwt from 'jsonwebtoken';
import * as nock from 'nock';
import request from 'supertest';
import { runSeed } from 'typeorm-seeding';

import { Customer } from '../../../src/api/models/Customer';
import { CreateBruce } from '../../../src/database/seeds/000-CreateBruce';
import { env } from '../../../src/env';
import { closeDatabase } from '../../utils/database';
import { BootstrapSettings } from '../utils/bootstrap';
import { prepareServer } from '../utils/server';

describe('/api/customers', () => {

    let bruce: Customer;
    let bruceAuthorization: string;
    let settings: BootstrapSettings;

    // -------------------------------------------------------------------------
    // Setup up
    // -------------------------------------------------------------------------

    beforeAll(async () => {
        settings = await prepareServer({ migrate: true });
        bruce = await runSeed<Customer>(CreateBruce);
        bruceAuthorization = await jwt.sign({
            email: 'bruce.wayne@wayne-enterprises.com',
            name: 'Bruce Wayne',
        }, env.jwt.secret, {
            expiresIn: 60 * 60,
        });
    });

    // -------------------------------------------------------------------------
    // Tear down
    // -------------------------------------------------------------------------

    afterAll(async () => {
        nock.cleanAll();
        await closeDatabase(settings.connection);
    });

    // -------------------------------------------------------------------------
    // Test cases
    // -------------------------------------------------------------------------

    test('GET: customers/ should return bruce', async (done) => {
        const response = await request(settings.app)
            .get('/api/customers')
            .set('USER-KEY', `Bearer ${bruceAuthorization}`)
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body.name).toBe(bruce.name);
        expect(response.body.email).toBe(bruce.email);
        done();
    });

});
