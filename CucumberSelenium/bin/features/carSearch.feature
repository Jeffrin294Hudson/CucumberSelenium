Feature: Validation of car search page
In order to validate car search as a buyer
I navigate to http://www.carsguide.com.au

Scenario: Searching for a  new car 

Given I am on the home page
When I move to car for sale menu
Then I click on Search cars 
And I select make as "BMW"
And I select Model as "1 Series"
And I select location as "ACT - All"
And I select price as "$10,000"
And I click on Find My next car button
Then I should see list of searched cars 
And page title should be "Bmw 1 Series Under 10000 for Sale ACT | carsguide"