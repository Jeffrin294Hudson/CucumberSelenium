package steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CarSearchSteps 
{
	public static WebDriver driver;
	@Before
	public void setUp()
	{
		System.setProperty("webdriver.chrome.driver", "H:\\learning\\s_ws\\selenium related\\executables\\chromedriver_1.exe");
		driver = new ChromeDriver();
		
	}
	
	@After
	public void  tearDown(Scenario scenario)
	{
	if (scenario.isFailed())
	{
	byte[] screenshotBytes = ((TakesScreenshot) 
	driver).getScreenshotAs(OutputType.BYTES);
	scenario.embed(screenshotBytes, "image/png");
	}
	
	if (driver != null)
	{
	driver.quit();
	
	}
	
	
	}
	
	@Given("^I am on the home page$")
	public void i_am_on_the_home_page() throws Throwable {
	    driver.get("http://carsguide.com.au/");
	}
	
	
	@When("^I move to car for sale menu$")
	public void i_move_to_car_for_sale_menu() throws Throwable {
		WebElement menu = driver.findElement(By.xpath("//*[@id=\"u_H\"]/div/div[1]/ul/li[1]/a"));
		new Actions(driver).moveToElement(menu).perform();
	   
	}

	@Then("^I click on Search cars$")
	public void i_click_on_Search_cars() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"u_H\"]/div/div[1]/ul/li[1]/div/div/div[1]/ul/li[1]/a")).click();
	}

	@Then("^I select make as \"([^\"]*)\"$")
	public void i_select_make_as(String make) throws Throwable {
		Select car = new Select(driver.findElement(By.xpath("//*[@id='makesd']")));
		car.selectByVisibleText(make);
	}

	@Then("^I select Model as \"([^\"]*)\"$")
	public void i_select_Model_as(String type) throws Throwable {
		Select model = new Select(driver.findElement(By.xpath("//*[@id=\"models\"]")));
		model.selectByVisibleText(type);
	}

	@Then("^I select location as \"([^\"]*)\"$")
	public void i_select_location_as(String loc) throws Throwable {
		Select location = new Select(driver.findElement(By.xpath("//*[@id=\"locations\"]")));
		location.selectByVisibleText(loc);
	   	}

	@Then("^I select price as \"([^\"]*)\"$")
	public void i_select_price_as(String amt) throws Throwable {
		Select price = new Select(driver.findElement(By.xpath("//*[@id=\"priceTo\"]")));
		price.selectByVisibleText(amt);
	}

	@Then("^I click on Find My next car button$")
	public void i_click_on_Find_My_next_car_button() throws Throwable {
		 driver.findElement(By.xpath("//*[@id=\"search-submit\"]")).click();
	}

	@Then("^I should see list of searched cars$")
	public void i_should_see_list_of_searched_cars() throws Throwable {
	  Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"pos0\"]/div[2]/div[2]/div[1]/div[1]/h5")).getText().contains("BMW"));
	}

	@Then("^page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String expected) throws Throwable {
	    Assert.assertEquals(expected, driver.getTitle());
	}


}
