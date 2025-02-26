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
  I.waitForVisible("#van-field-11-input", 60); // Wait for the email input field to be visible
  I.fillField("#van-field-11-input", email || Test_Email);
});

Then("the user fills in password as {string}", (password: string) => {
  I.waitForVisible("#van-field-12-input", 60); // Wait for the email input field to be visible
  I.fillField("#van-field-12-input", password || Test_Password);
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
