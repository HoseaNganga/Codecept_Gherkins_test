Feature:Select Product By Category
  As a consumer
  I would like to select a producy By Its Category
  and add it to my cart

  Scenario: Successful selecting a product by its category as a consumer
    Given the user has browsed to the homepage
    And the user clicks on the category dropdown
    And the user selects a random category
    Then the user should be redirected to the category page
    And the user clicks on any random productCard
    Then the user is redirected to the productdetailpage
    
    
    