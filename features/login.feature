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
    And the user is redirected back to the homepage
    Then the user hovers over their account and sees a logout button

  
  Scenario: Successful Redirection To Login Page by hovering over the Account Button
    Given the user has browsed to the homepage
    And the user hovers over My Account Button and clicks login
    Then the login page should be displayed