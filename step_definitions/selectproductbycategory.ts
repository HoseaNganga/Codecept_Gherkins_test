import { I } from "./steps";

Given("the user has browsed to the homepage", () => {
  I.amOnPage("/");
  I.waitForElement(".category-select-box", 5);
});

Then("the user clicks on the category dropdown", () => {
  I.click(".category-title");
  I.waitForElement(".base-category-list", 5);
});

Then("the user selects a random category", async () => {
  I.waitForElement(".category-select-box", 5);
  I.click(".category-title");
  I.waitForElement(".base-category-list", 5);

  I.waitForElement(".base-category-item", 5);

  const categories = await I.grabNumberOfVisibleElements(".base-category-item");
  console.log(`Total Categories: ${categories}`);
  if (categories > 0) {
    const randomIndex = Math.floor(Math.random() * categories);
    const categoryLocator = locate(".base-category-item").at(randomIndex + 1);
    console.log(`Element selected: ${categoryLocator}`);

    I.waitForElement(categoryLocator, 25);
    I.click(categoryLocator);
  } else {
    throw new Error("No categories available to select.");
  }
});

Then("the user should be redirected to the category page", async () => {
  I.waitForNavigation({ wait: "load" });

  const currentUrl = await I.grabCurrentUrl();

  if (!currentUrl.includes("/category")) {
    throw new Error(
      `Expected URL to contain '/category', but got ${currentUrl}`
    );
  }
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
    I.wait(2);
    I.switchToNextTab();
  } else {
    throw new Error("No products found on the page");
  }
});

Then("the user is redirected to the productdetailpage", async () => {
  I.waitForNavigation({ wait: "load" });

  const currentUrl = await I.grabCurrentUrl();
  if (!currentUrl.includes("/listing")) {
    throw new Error(
      `Expected URL to contain '/listing', but got ${currentUrl}`
    );
  }
});
