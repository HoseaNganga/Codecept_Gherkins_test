Feature:Register
  As a new user
  I want to register into the application
  so that i can create and own an account


  Scenario: Successful Registration as a user
    Given the user has browsed to the homepage
    When the user clicks on the login Button
    Then the login page should be displayed
    And the user clicks on the register Button
    Then the register page should be displayed
    And the user selects the male gender
    And the user fills in the first name as "John"
    And the user fills in the second name as "Doe"
    And the user fills in the email as "johndoe@gmail.com"
    And the user fills in password as "AppTest_1!"
    And the user confirms password as "AppTest_1!"
    Then the user clicks on the register Button
