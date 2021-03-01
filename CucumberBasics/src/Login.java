import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login 
{
	@Given("^User navigates to www\\.facebook\\.com$")
	public void user_navigates_to_www_facebook_com() throws Throwable {
	   System.out.println("@Given- www.facebook.com");
	}

	@When("^User validates the Homepage title$")
	public void user_validates_the_Homepage_title() throws Throwable {
	   System.out.println("validate the homepage");
	}

	@Then("^User enters [a-zA-Z]{1,} Username$")
	public void user_enters_Valid_Username() throws Throwable {
		 System.out.println("enter username");
	}

	@Then("^User enters [a-zA-Z]{1,} Password$")
	public void user_enters_Valid_Password() throws Throwable {
		 System.out.println("enter password");
	}

	@Then("^User [a-zA-Z]{1,} Successfully Login$")
	public void user_should_be_Successfully_Login() throws Throwable {
		 System.out.println("login successful");
	}

	

}
