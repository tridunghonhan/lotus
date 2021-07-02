import {StringExpectation} from './expectations'

describe("Expectations: expect a string ", () => {
    test('expect a string is not empty', (done) => {
        let strExpect = new StringExpectation();
        expect(strExpect.isSatisfied()).toBe(true);
        done();
    });
})