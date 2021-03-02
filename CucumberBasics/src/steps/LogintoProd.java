package steps;
import cucumber.api.java.en.Then;

public class LogintoProd 
{

	@Then("^User validates the captcha image$")
	public void user_validates_the_captcha_image() throws Throwable {
		System.out.println("User validates the captcha image");
	}
	
	
}
