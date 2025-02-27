import { I } from "./steps";
import dotenv from "dotenv";

dotenv.config();

const Test_Email: string = process.env.KILIMALL_EMAIL!;

const Test_Password: string = process.env.KILIMALL_PASSWORD!;

let selectedProductName: string = "";
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

Then("the user clicks on any random productCard", async () => {
  I.waitForVisible(".product-item", 15);

  const products = await I.grabNumberOfVisibleElements(".product-item");
  console.log(`Number of products on page: ${products}`);

  if (products > 0) {
    const pickRandomIndex = Math.floor(Math.random() * products);
    const productLocator = `(//*[@class and contains(concat(' ', normalize-space(@class), ' '), ' product-item ')]//a)[position()=${
      pickRandomIndex + 1
    }]`;
    console.log(`Randomly selected product index: ${pickRandomIndex + 1}`);

    I.waitForVisible({ xpath: productLocator }, 15);
    I.waitForVisible(
      "(//*[@class and contains(concat(' ', normalize-space(@class), ' '), ' product-item ')]//a)[position()=${pickRandomIndex + 1}]",
      15
    );
    const selectedProductName = await I.grabTextFrom(
      `(//*[@class and contains(concat(' ', normalize-space(@class), ' '), ' product-item ')]//a)[position()=${
        pickRandomIndex + 1
      }]//div[contains(@class, 'info-box')]//p[contains(@class, 'product-title')]`
    );

    console.log(`Selected product: ${selectedProductName}`);

    await I.executeScript((xpath) => {
      const element = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (element && element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, productLocator);

    I.click(productLocator);
    I.wait(10);
    const openTabs = await I.grabNumberOfOpenTabs();
    console.log(`Tabs open One: ${openTabs}`);
    const tabs = await I.grabNumberOfOpenTabs();

    if (tabs > 1) {
      console.log(`Tabs open: ${tabs}`);
      I.switchToNextTab();
      I.wait(3);
    } else {
      throw new Error("New tab did not open for product details page.");
    }
  } else {
    throw new Error("No products found on the page");
  }
});

Then("the user is redirected to the productdetailpage", async () => {
  I.wait(30);

  const currentUrl = await I.grabCurrentUrl();
  if (!currentUrl.includes("/listing")) {
    throw new Error(
      `Expected URL to contain '/listing', but got ${currentUrl}`
    );
  }
});

Then("the user adds a product to the cart", async () => {
  I.waitForElement(".van-stepper", 10);
  I.waitForElement(".van-stepper__plus", 10);
  I.click(".van-stepper__plus");
  I.wait(3);
  I.waitForElement(".opt-btn.yellow-btn", 5);
  I.click(".opt-btn.yellow-btn");
  I.wait(3);
  I.waitForElement('//*[contains(@class, "toast")]', 5);
  I.wait(3);
  /* const toastText = await I.grabTextFrom('//*[contains(@class, "toast")]'); */
  I.see(
    "Successfully added to shopping cart",
    '//*[contains(@class, "toast")]'
  );
});

Then("the user redirects to the cartpage", () => {
  I.see("Cart", '//span[contains(@class, "label")]');
  I.waitForClickable('//span[contains(text(),"Cart")]', 5);
  I.click('//span[contains(text(),"Cart")]');
});

Then("the cartPage is displayed", () => {
  I.wait(10);
  I.seeInCurrentUrl("/shopping-cart");
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
