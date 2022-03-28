/// <reference types="cypress" />
import "cypress-iframe";

import pageActions from "../support/pageAction";

var page = new pageActions();

describe("Iodine Software Career", () => {
  before(() => {
    page.launchURL();
    page.navigateToCareer();
    page.validateUrl();
    page.validateFrame();
    page.jobListing();
    page.positionApplied();
    page.authorizedSponserhipForm();
    page.formSubmit();
    page.genderRace();
    page.selectVetran();
    page.selectDisablity();
  });

  it("Verify validation message on required email field for blank data", () => {
    page.fillForm();
    page.submitForm();
    page.emailvalidation().should("equal", "Please fill out this field.");
  });

  it("Verify validation message on required email field for incorrect data", () => {
    page.fillForm();
    page.emailIncorrectData();
    page
      .emailvalidation()
      .should(
        "equal",
        "Please include an '@' in the email address. 'incorrect' is missing an '@'."
      );
  });
});
