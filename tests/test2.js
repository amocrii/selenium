const {By, Builder} = require("selenium-webdriver")

async function test2(){
    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://www.way2automation.com/way2auto_jquery/alert.php#load_box")
    await driver.sleep(1000)
    await driver.findElement(By.linkText("Click the button to display an alert box:")).click();

    await driver.wait(until.alertIsPresent());
    let alert = await driver.switchTo().alert();
    await alert.accept();

    await driver.quit();
}

test2();