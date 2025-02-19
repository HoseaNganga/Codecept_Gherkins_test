import { I } from "./steps";

Given("the user has browsed to the homepage", () => {
  I.amOnPage("/");
});
When("the user clicks on {string}", (linktext: string) => {
  I.click(`a[href*="${linktext}"]`);
});

Then("the {string} page is displayed", (pageUrl: string) => {
  I.seeInCurrentUrl(pageUrl);
});

When("the user clicks on {string}", (linktext: string) => {
  I.waitForElement(`a[href*="${linktext}"]`, 5);
  I.click(`a[href*="${linktext}"]`);
});

Then("the {string} page is displayed", (pageurl: string) => {
  I.seeInCurrentUrl(pageurl);
});
//FAILING DUE TO CAPTCHA
