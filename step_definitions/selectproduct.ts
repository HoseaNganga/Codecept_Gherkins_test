import { I } from "./steps";

Given("the user has browsed to the homepage", async () => {
  I.amOnPage("/");
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
});

Then("the user is redirected to the cartpage", async () => {
  I.wait(15);
  I.seeInCurrentUrl("/login");
});
