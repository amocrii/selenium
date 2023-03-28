const {By, Builder} = require("selenium-webdriver")
require("chai").should();

async function test3(){
    let driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://dineshvelhal.github.io/testautomation-playground/forms.html")
    let checkbox = await driver.findElement(By.id("check_javascript"))
    checkbox.click()
    
    let selectState = checkbox.isSelected();

    if(selectState == true){
        console.log("The JavaScript radio button was selected!")
    }

    await driver.quit();
}

test3();