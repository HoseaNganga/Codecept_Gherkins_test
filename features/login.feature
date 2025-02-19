Feature:Register
  As a new user
  I want to register into the application
  so that i can create and own an account


  Scenario: Successful Registration as a user
    Given the user has browsed to the homepage
    When the user clicks on the login Button
    Then the login page should be displayed
    When the user clicks on the register Button
    Then the register page should be displayed
    When the user selects the male gender
    When the user fills in the first name as "John"
    When the user fills in the second name as "Doe"
    When the user fills in the email as "johndoe@gmail.com"
    When the user fills in password as "AppTest_1!"
    When the user confirms password as "AppTest_1!"