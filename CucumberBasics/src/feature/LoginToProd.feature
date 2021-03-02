@Functional
Feature: LoginToProd
  
  In order to perform Login into Production
  As a User 
  I want to enter Correct Username and Password

  Scenario: In order to Verify login into facebook
    Given User navigates to www.facebook.com
    When User validates the Homepage title
    Then User enters "valid" Username
    And User enters "valid" Password
    And User validates the captcha image
    Then User "shouldbe" Successfully Login

  Scenario: In order to Verify login into facebook
    Given User navigates to www.facebook.com
    When User validates the Homepage title
    Then User enters "invalid" Username
    And User enters "invalid" Password
    And User validates the captcha image
    Then User "shouldnot" Successfully Login
