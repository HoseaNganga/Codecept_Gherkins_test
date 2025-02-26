import { I } from "./steps";
import dotenv from "dotenv";

dotenv.config();

const Test_Email: string = process.env.KILIMALL_EMAIL!;

const Test_Password: string = process.env.KILIMALL_PASSWORD!;

// Add in your custom step files

Given("the user has browsed to the homepage", () => {
  I.amOnPage("/");
});
When("the user clicks on the My Account Button", () => {
  I.see("My Account", '//span[contains(@class, "label")]');
  I.click('//span[contains(text(),"My Account")]');
});
Then("the login page should be displayed", () => {
  I.seeInCurrentUrl("/login");
});

Then("the user fills in email as {string}", (email: string) => {
  const actualEmail = email.includes("<") ? Test_Email : email;
  I.waitForVisible('//input[@name="account"]', 15); // Wait for the email input field to be visible
  I.fillField('//input[@name="account"]', actualEmail);
});

Then("the user fills in password as {string}", (password: string) => {
  const actualPassword = password.includes("<") ? Test_Password : password;
  I.waitForVisible('//input[@name="password"]', 15); // Wait for the password input field to be visible
  I.fillField('//input[@name="password"]', actualPassword);
});

Then("the user clicks the submit Button", () => {
  I.waitForVisible('//button[@type="submit"]', 15); // Wait for the submit button to be visible
  I.click('//button[@type="submit"]');
});

Then("the user is redirected back to the homepage", () => {
  I.waitForNavigation(5);
  I.seeInCurrentUrl("/");
});

Then("the user hovers over their account and sees a logout button", () => {
  I.wait(10);
  // Wait for the profile section to exist in the DOM (even if hidden)
  I.waitForElement('//div[contains(@class, "opt-btn my")]', 5);

  // Ensure the profile section is actually visible before hovering
  I.waitForVisible('//div[contains(@class, "opt-btn my")]', 5);
  //Button is only visible when i hover over the image icon

  /* I.wait(10); */

  I.waitForVisible('//img[contains(@src, "user-icon@2x.png")]', 10); // Ensure the image is loaded

  // Hover over the profile icon to reveal the logout button
  I.moveCursorTo('//img[contains(@src, "user-icon@2x.png")]');

  I.waitForVisible(
    "//button[contains(@class, 'van-button') and .//span[text()='Logout']]",
    10
  );
});

Given("the user has browsed to the homepage", () => {
  I.amOnPage("/");
});

When("the user hovers over My Account Button and clicks login", () => {
  I.moveCursorTo('//span[contains(text(),"My Account")] ');
  I.waitForVisible(
    "//button[contains(@class, 'van-button') and .//span[text()='Login']]",
    10
  );
  I.waitForClickable(
    "//button[contains(@class, 'van-button') and .//span[text()='Login']]",
    5
  );
  I.click(
    "//button[contains(@class, 'van-button') and .//span[text()='Login']]"
  );
});
Then("the login page should be displayed", () => {
  I.seeInCurrentUrl("/login");
});
