Feature:Order Product
  As a new user
  i want to order a Product
  using categories

  Scenario:Successful Ordering a desktop from the computer category
    Given the user has browsed to the homepage
    When the user clicks on "computers"
    Then the "/computers" page is displayed
    And the user clicks on "desktops"
    Then the "/desktops" page is displayed

  Scenario:Successful Ordering a camera from the Electronics category
    Given the user has browsed to the homepage
    When the user clicks on "electronics"
    Then the "/electronics" page is displayed
    And the user clicks on "camera-photo"
    Then the "/camera-photo" page is displayed

