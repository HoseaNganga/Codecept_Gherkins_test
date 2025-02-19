const { I } = inject();
// Add in your custom step files

Given("the user has browsed to the homepage", () => {
  I.amOnPage("/");
});
When("the user clicks on the login Button", () => {
  I.click('//a[contains(text(),"Log in")]');
});
Then("the login page should be displayed", () => {
  I.seeInCurrentUrl("/login");
});
When("the user clicks on the register Button", () => {
  I.click('//button[contains(text(),"Register")]');
});
Then("the register page should be displayed", () => {
  I.amOnPage("/register");

  /* Await Verification Captcha box */
  // Wait for the CAPTCHA checkbox to be visible
  I.waitForVisible("label.cb-lb input[type='checkbox']", 30); // Ensure it's visible for 30 seconds

  // Check if the checkbox is clickable before interacting
  I.waitForClickable("label.cb-lb input[type='checkbox']", 30);

  // Interact with the checkbox
  I.checkOption("label.cb-lb input[type='checkbox']");
});
When("the user selects the male gender", () => {
  I.wait(10);
  I.checkOption("#gender-male");
});
When("the user fills in the first name as {string}", (firstname: string) => {
  I.waitForVisible("#FirstName", 1);
  I.fillField("#FirstName", firstname);
});
When("the user fills in the second name as {string} ", (lastName: string) => {
  I.waitForVisible("#LastName", 1);
  I.fillField("#LastName", lastName);
});
When("when the user fills in the email as {string}", (email: string) => {
  I.waitForVisible("#Email", 1);
  I.fillField("#Email", email);
});
When("the user fills in password as {string}", (password: string) => {
  I.waitForVisible("#Password", 1);
  I.fillField("#Password", password);
});
When("the user confirms password as{string}", (confirmpassword: string) => {
  I.waitForVisible("#ConfirmPassword", 1);
  I.fillField("#ConfirmPassword", confirmpassword);
});

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
