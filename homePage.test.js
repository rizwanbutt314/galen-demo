
var baseURL = "http://galenframework.com/";

beforeTest(function (testInfo) {
    var driver = createDriver(baseURL,
        "1024x768",
        "chrome");

    session.put("driver", driver);
});

test("Validate Home Page Logo", function(){
    var driver = session.get("driver");
    checkLayout(driver, "homePage.gspec");
});

afterTest(function (testInfo) {
    var driver = session.get("driver");
    driver.quit();
});