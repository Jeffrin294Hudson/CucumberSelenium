package steps;
import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login 
{
	
	@Before ("@sanity")
	public void setUp()
	{
		System.out.println("Launching the browser");
	}
	
	@After ("@Functional")
	public void tearDown()
	{
		System.out.println("driver.quit");
	}
	
	
	
	
	@Given("^User navigates to www\\.facebook\\.com$")
	public void user_navigates_to_www_facebook_com() throws Throwable {
	   System.out.println("@Given- www.facebook.com");
	}

	@When("^User validates the Homepage title$")
	public void user_validates_the_Homepage_title() throws Throwable {
	   System.out.println("validate the homepage");
	}

	@Then("^User enters \\\"([^\\\"]*)\\\" Username$")
	public void user_enters_Valid_Username(String username) throws Throwable {
		 System.out.println("enter "+username+" username");
	}

	@Then("^User enters \\\"([^\\\"]*)\\\" Password$")
	public void user_enters_Valid_Password(String password) throws Throwable {
		 System.out.println("enter "+password+" password");
	}

	@Then("^User \\\"([^\\\"]*)\\\" Successfully Login$")
	public void user_should_be_Successfully_Login(String logintype) throws Throwable {
		 System.out.println("login "+logintype+" successful");
	}

	@And("^User select the age category$")
	public void user_select_the_age_category(DataTable table) throws Throwable {
	   
		List<Map<String,String>> data = table.asMaps(String.class, String.class);
		System.out.println("Age-- "+data.get(0).get("Age")+"Location-- "+data.get(1).get("Location"));
	}
	

}
