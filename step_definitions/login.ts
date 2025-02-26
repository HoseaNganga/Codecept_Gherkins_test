import { I } from "./steps";
import dotenv from "dotenv";

dotenv.config();

const Test_Email: string = process.env.KILIMALL_EMAIL!;

const Test_Password: string = process.env.KILIMALL_PASSWORD!;

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
  I.waitForVisible('//input[@name="account"]', 15);
  I.fillField('//input[@name="account"]', actualEmail);
});

Then("the user fills in password as {string}", (password: string) => {
  const actualPassword = password.includes("<") ? Test_Password : password;
  I.waitForVisible('//input[@name="password"]', 15);
  I.fillField('//input[@name="password"]', actualPassword);
});

Then("the user clicks the submit Button", () => {
  I.waitForVisible('//button[@type="submit"]', 15);
  I.click('//button[@type="submit"]');
});

Then("the user is redirected back to the homepage", () => {
  I.waitForNavigation(5);
  I.seeInCurrentUrl("/");
});

Then("the user hovers over their account and sees a logout button", () => {
  I.wait(10);

  I.waitForElement('//div[contains(@class, "opt-btn my")]', 5);

  I.waitForVisible('//div[contains(@class, "opt-btn my")]', 5);

  I.waitForVisible('//img[contains(@src, "user-icon@2x.png")]', 10);

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
