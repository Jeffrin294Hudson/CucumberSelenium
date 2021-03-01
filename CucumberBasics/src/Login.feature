Feature: Login

In order to perform Successful Login
As a User 
I want to enter Correct Username and Password

Scenario: In order to Verify login into facebook as valid user 
	Given User navigates to www.facebook.com
	When User validates the Homepage title
	Then User enters Valid Username
	And User enters Valid Password
	Then User shouldbe Successfully Login

Scenario: In order to Verify login into facebook as Invalid user
	Given User navigates to www.facebook.com
	When User validates the Homepage title
	Then User enters Invalid Username
	And User enters Invalid Password
	Then User shouldnot Successfully Login

