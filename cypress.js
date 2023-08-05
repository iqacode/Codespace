describe("LoginTest", function () {
it("tests LoginTest", function (browser) {
  browser.windowRect({width: 1830, height: 858})
  .navigateTo("https://automationexercise.com/")
  .click("#header li:nth-of-type(4) > a")
  .click("[data-qa='signup-name']")
  .click("[data-qa='signup-name']")
  .setValue("[data-qa='signup-name']", "jlucsonmusic@")
  .setValue("[data-qa='signup-name']", "jlucsonmusic@gmail.com")
  .click("[data-qa='signup-email']")
  .setValue("[data-qa='signup-email']", "jlucsonmusic@")
  .setValue("[data-qa='signup-email']", "jlucsonmusic@gmail.com")
  .click("[data-qa='signup-button']")
  .click("#id_gender1")
  .click("[data-qa='password']")
  .setValue("[data-qa='password']", "b52150jl")
  .click("[data-qa='days']")
  .setValue("[data-qa='days']", "10")
  .click("[data-qa='months']")
  .setValue("[data-qa='months']", "12")
  .click("[data-qa='years']")
  .setValue("[data-qa='years']", "1985")
  .click("[data-qa='first_name']")
  .setValue("[data-qa='first_name']", "jean")
  .click("[data-qa='last_name']")
  .setValue("[data-qa='last_name']", "lue")
  .click("[data-qa='company']")
  .setValue("[data-qa='company']", "gmail")
  .click("[data-qa='address']")
  .setValue("[data-qa='address']", "11")
  .click("[data-qa='address2']")
  .setValue("[data-qa='address2']", "bolton")
  .click("[data-qa='country']")
  .click("[data-qa='state']")
  .setValue("[data-qa='state']", "barsu")
  .click("[data-qa='city']")
  .setValue("[data-qa='city']", "bangolo")
  .click("[data-qa='zipcode']")
  .setValue("[data-qa='zipcode']", "bbs3")
  .click("[data-qa='mobile_number']")
  .setValue("[data-qa='mobile_number']", "09823456")
  .click("[data-qa='create-account']")
  .click("[data-qa='continue-button']")
  .end();
  });
});