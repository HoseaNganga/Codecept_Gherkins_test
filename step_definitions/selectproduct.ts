import { I } from "./steps";

Given("the user has browsed to the homepage", async () => {
  I.amOnPage("/");
});

Then("the user clicks on any random productCard", async () => {
  I.waitForVisible(".product-item", 15); // Waiting for the .sku-item elements to be visible

  const products = await I.grabNumberOfVisibleElements(".product-item"); // Get the number of .sku-item elements
  console.log(`Number of products on page: ${products}`);

  if (products > 0) {
    // Pick a random index from the available products
    const pickRandomIndex = Math.floor(Math.random() * 10);
    console.log(`Randomly selected product index: ${pickRandomIndex + 1}`);
    // Ensure the selected product's link is clickable before clicking
    I.waitForVisible(
      `.product-item a:nth-of-type(${pickRandomIndex + 1})`, // Select the random product link
      15
    );
    I.waitForClickable(
      `.product-item a:nth-of-type(${pickRandomIndex + 1})`, // Select the random product link
      15
    );

    I.click(
      `.product-item a:nth-of-type(${pickRandomIndex + 1})` // Clicking the random product link
    );
  } else {
    throw new Error("No products found on the page");
  }
});
