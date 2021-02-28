Feature: Login

In order to perform Successful Login
As a User 
I want to enter Correct Username and Password

Scenario: In order to perform Successful Login
	Given User navigates to www.facebook.com
	When User validates the Homepage title
	Then User enters Username
	And User enters Password
	Then User should Successfully Login


