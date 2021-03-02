@sanity
Feature: Login
  
  In order to perform Successful Login
  As a User 
  I want to enter Correct Username and Password

  Background: 
    Given User navigates to www.facebook.com
    When User validates the Homepage title

  Scenario Outline: In order to Verify login into facebook
    Then User enters "<username>" Username
    And User enters "<password>" Password
    And User select the age category
      | Age      | Location |
      | Below 18 | India    |
      | Above 18 | Usa      |
    Then User "<logintype>" Successfully Login

    Examples: 
      | username | password | logintype |
      | valid    | valid    | should    |
      | Invalid  | Invalid  | shouldnot |
