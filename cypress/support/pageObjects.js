/// <reference types="cypress" />

const locators = require("../support/locator.json");
const data = require("../fixtures/testData.json");

class pageObjects {
  selectCompany() {
    return cy.get(locators.linkWelcomePage).contains(locators.company);
  }

  selectCareer() {
    return cy.get(locators.linkWelcomePage).contains(locators.career);
  }

  getUrl() {
    return cy.url();
  }

  checkframeloaded() {
    return cy.frameLoaded(locators.frameid);
  }

  getJobListing() {
    return cy.iframe(locators.frameid).contains(data.jobTitle);
  }

  applyforPosition() {
    return cy
      .iframe(locators.frameid, { url: locators.jobIntroUrl })
      .contains(locators.apply);
  }

  authorizedToWork() {
    return cy
      .iframe(locators.frameid, { url: locators.submitResumeUrl })
      .find(locators.selectNo)
      .eq(0);
  }

  sponsorship() {
    return cy
      .iframe(locators.frameid, { url: locators.submitResumeUrl })
      .find(locators.selectYes)
      .eq(1);
  }

  save() {
    return cy
      .iframe(locators.frameid, { url: locators.submitResumeUrl })
      .find(locators.save);
  }

  submitButton() {
    return cy
      .iframe(locators.frameid, { url: locators.submitQuesUrl })
      .find(locators.submit);
  }

  genderSelect() {
    return cy.iframe(locators.frameid).find(locators.maleGender);
  }

  race() {
    return cy
      .iframe(locators.frameid)
      .find(locators.radioLabel)
      .contains(data.raceOption)
      .siblings(locators.input);
  }

  submit() {
    return cy.iframe(locators.frameid).find(locators.racesubmit);
  }

  veteran() {
    return cy
      .iframe(locators.frameid)
      .find(locators.radioLabel)
      .should("be.visible")
      .contains(data.vetranType)
      .siblings(locators.input);
  }

  disability() {
    return cy
      .iframe(locators.frameid)
      .find(locators.radioLabel)
      .should("be.visible")
      .contains(data.disabilityStatus)
      .siblings(locators.input);
  }

  name() {
    return cy.iframe(locators.frameid).find(locators.fullName);
  }

  date() {
    return cy.iframe(locators.frameid).find(locators.dateTextbox);
  }

  firstName() {
    return cy
      .iframe(locators.frameid, { url: locators.submitFormUrl })
      .find(locators.firstName);
  }

  lastName() {
    return cy.iframe(locators.frameid).find(locators.lastName);
  }

  submitForm() {
    return cy.iframe(locators.frameid).find(locators.submitText);
  }

  emailTextBox() {
    return cy.iframe(locators.frameid).find(locators.email);
  }

  todaysDate() {
    const d = new Date();
    return d.toISOString().split("T")[0];
  }
}

export default pageObjects;
