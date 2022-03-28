/// <reference types="cypress" />
import 'cypress-iframe'

import pageActions from "../support/pageAction";

var page = new pageActions();

describe("Iodine Software Career", () =>{
    before(() => {

        page.launchURL();

      });

    it("Verify validation message on required email field", () => {

        page.navigateToCareer();
        page.validateUrl();
        page.validateFrame();
        page.jobListing();
        page.positionApplied()
        page.authorizedSponserhipForm();
        page.formSubmit();
        page.genderRace();
        page.selectVetran();
        page.selectDisablity();
        page.fillForm();
        page.emailvalidation().should('equal', 'Please fill out this field.')
        
    })

    

})