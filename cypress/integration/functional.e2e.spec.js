/// <reference types="cypress" />
import 'cypress-iframe'

import pageActions from "../support/pageAction";

var page = new pageActions();

describe("Open the iodine software", () =>{
    before(() => {

        page.launchURL();

      });

    it("Open the application on browser", () => {

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