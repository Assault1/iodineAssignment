/// <reference types="cypress" />

import pageObjects from "../support/pageObjects";
const locators = require("../support/locator.json");
const data = require("../support/testData.json");

var obj = new pageObjects();


class pageActions {

    launchURL() {
      cy.visit(Cypress.env("baseUrl"));
    }
  
    navigateToCareer() {
        obj.selectCompany().should('be.visible').click();
        obj.selectCareer().should('be.visible').click();
    }
    
    validateUrl() {
        obj.getUrl().should('include',locators.pageUrl);
    }

    validateFrame() {
        obj.checkframeloaded();
    }

    jobListing() {
        obj.getJobListing().click();
    }
    
    positionApplied() {
        obj.applyforPosition().should('be.visible').click();
    }

    authorizedSponserhipForm() {
        obj.authorizedToWork().click()
        obj.sponsorship().click();
        obj.save().click();
    }

    formSubmit() {
        obj.submitButton().click()
    }
    
    genderRace () {

        cy.wait(2000)
        obj.genderSelect().click();
        obj.race().click();
        obj.submit().click();
    }
    
    selectVetran(){
        cy.wait(2000);
        obj.veteran().should('be.visible').click();
        obj.submit().click();
    }

    selectDisablity() {
        cy.wait(2000);
        obj.disability().click();
        obj.name().type(data.fullName);
        obj.date().type(obj.todaysDate());
        obj.submit().click();

    }

    fillForm() {
        obj.firstName().clear()
        obj.firstName().type(data.firstName);
        obj.lastName().clear()
        obj.lastName().type(data.LastName);
        obj.submitForm().click();
    }

    emailvalidation(){
        return obj.emailTextBox().invoke('prop', 'validationMessage');
    }

}

export default pageActions