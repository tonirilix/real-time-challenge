import { handler, users } from '../auth/login'
import { getResponse, STATUS_CODES } from '../lib/responses';

import * as chai from 'chai';
import { expect } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
// import 'mocha';

before(() => {
    chai.use(chaiAsPromised);
});

afterEach(() => {
    delete process.env.JWT_SECRET;
  });


describe("Lambda Login", () => {

    it('Should fail authentication', async () => {
        let event = {};
        let context = {};
        let res = handler(event as any, context as any);
        return expect(res).to.eventually.have.property("statusCode").and.to.be.equals(STATUS_CODES.unauthorized);
    });

    it('Should succeed authentication', async () => {
        process.env.JWT_SECRET = 'FAKE_SIGNTARE';
        const user = users['pedro'];
        const body = {
            "username": user.name,
            "password": user.lastname
        }
        let event = {
            body: JSON.stringify(body)
        };
        let context = {};
        let res = handler(event as any, context as any);
        return expect(res).to.eventually.have.property("statusCode").and.to.be.equals(STATUS_CODES.ok);
    });

})