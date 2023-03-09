
import { Requests } from "../support/Requests";


// let json = require(`../../fixtures/jsons/simple-simple.json`)
let request = new Requests();
let res = null;

describe('Validate JSON 5', async () => {
    let env = null;
    env = await Cypress.env()[Cypress.env('environmentRun')];

    it('Loading requisition', async () => {
        request.doRequest(env.mediumcomplex);
        await cy.get('@response').then((response) => {
            res = response;
            cy.task('log', JSON.stringify(response))
        })
    });

    it('Validate users and quantify user', async () => {
        let forJson = null;
        for (let json of res) {
            forJson = json;
        }
        request.ExpectAssert(forJson.users)
        request.ExpectAssert(forJson.users).length(2)

    });

});