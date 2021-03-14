$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("carSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of car search page",
  "description": "In order to validate car search as a buyer\r\nI navigate to http://www.carsguide.com.au",
  "id": "validation-of-car-search-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2056538351,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Searching for a  new car",
  "description": "",
  "id": "validation-of-car-search-page;searching-for-a--new-car",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I move to car for sale menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Search cars",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make as \"BMW\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Model as \"1 Series\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location as \"ACT - All\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price as \"$10,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My next car button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "page title should be \"Bmw 1 Series Under 10000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 10103471178,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_car_for_sale_menu()"
});
formatter.result({
  "duration": 417562957,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Search_cars()"
});
formatter.result({
  "duration": 3927908321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 18
    }
  ],
  "location": "CarSearchSteps.i_select_make_as(String)"
});
formatter.result({
  "duration": 43609532,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027makesd\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.82)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027HP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.82, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58484}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f9125e7cda4518840f90a60252386f4d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027makesd\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.CarSearchSteps.i_select_make_as(CarSearchSteps.java:70)\r\n\tat ✽.And I select make as \"BMW\"(carSearch.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_Model_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_price_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_My_next_car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarSearchSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 10000 for Sale ACT | carsguide",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1300029251,
  "status": "passed"
});
});