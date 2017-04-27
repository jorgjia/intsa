var webdriver=require('selenium-webdriver'),
By=webdriver.By,
until=webdriver.until;
var driver=new webdriver.Builder()
.forBrowser('firefox')
.build();
var follow=["cars","love","travel"];

driver.get('https://www.instagram.com/');
driver.wait(until.elementLocated(By.className('_fcn8k'))).click().then(function(){

driver.findElement(By.name('username')).sendKeys("metellarigjorgjia");
driver.wait(until.elementLocated(By.name('password'))).sendKeys("A").then(function(text) {
	console.log(text);
	driver.findElement(By.className('_ibk5z')).click().then(function() {
		recursive(0);
	});
});
});

function recursive(i) {
	driver.get("https://www.instagram.com/" + follow[i])
	//driver.findElement(By.className('_8mlbc _vbtk2 _t5r8b')).click()
	/*driver.executeScript("var fotoarr=$('._vbtk2'); fotoarr[0].click()")*/
	.then(function() {
		i++;
		if (i < follow.length) recursive(i);
		else driver.quit();
	});
};