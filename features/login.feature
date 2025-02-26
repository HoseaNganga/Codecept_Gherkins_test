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
  
  Scenario: Successful Redirection To Login Page by hovering over the Account Button
    Given the user has browsed to the homepage
    When the user hovers over My Account Button and clicks login
    Then the login page should be displayed