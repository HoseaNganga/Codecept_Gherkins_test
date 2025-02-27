Feature:Login
  As an existing user
  I want to login  into the application
  so that i can access my account


  Scenario: Successful Login as an existing user
    Given the user has browsed to the homepage
    When the user clicks on the My Account Button
    Then the login page should be displayed
    And the user fills in email as "<email>"
    And the user fills in password as "<password>"
    And the user clicks the submit Button
    Then the user is redirected back to the homepage
    And the user hovers over their account and sees a logout button
    And the user clicks on any random productCard
    And the user is redirected to the productdetailpage
    And the user adds a product to the cart
    And the user redirects to the cartpage
    Then the cartPage is displayed


  
  Scenario: Successful Redirection To Login Page by hovering over the Account Button
    Given the user has browsed to the homepage
    And the user hovers over My Account Button and clicks login
    Then the login page should be displayed


   
