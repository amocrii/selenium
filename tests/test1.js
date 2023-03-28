const {By, Builder} = require("selenium-webdriver")
require("chai").should();

async function test1(){
    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://www.way2automation.com/way2auto_jquery/registration.php#load_box")
    await driver.findElement(By.name("name")).sendKeys("Alin");
    await driver.findElement(By.xpath('//*[@id="register_form"]/fieldset[2]/div/label[2]/input')).click();
    let value = await driver.findElement(By.name("name")).getAttribute("value")

    value.should.equal("Alin");

    await driver.sleep(2000);

    await driver.quit();
}

test1();