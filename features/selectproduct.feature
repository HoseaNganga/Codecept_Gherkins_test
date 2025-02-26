Feature:Select Product
  As a consumer
  I would like to select any product 
  and add it to my cart

  Scenario:Successful Selecting any product as a consumer
    Given the user has browsed to the homepage
    And the user clicks on any random productCard
    Then the user is redirected to the productdetailpage
    