
import { interceptRequest } from "../support/helpers";
import { deliveryTimePage } from "../support/page-objects/terminDostawy-page";
import { cartPage } from "../support/page-objects/koszyk-page";
import { chooseDietPage } from "../support/page-objects/wybierzDiete-page";


const { path , dietPrice } = Cypress.env()
const today = new Date();
let todayPlusThreeDays = today.getDate() +3
let priceAfterRabat = dietPrice -( dietPrice * 0.1) 

describe('Ordering Flow', () => {
    
  before(() =>{
    cy.clearLocalStorage()
    cy.clearCookies()

  })  
    
    it('Add diet to cart', ()=>{
      interceptRequest()
      cy.visit(`${path.chooseDiet}/foodharmony`)
      cy.wait([
        '@getCities',
        '@getFormSettings',
        '@getProfiles'
      ])
      chooseDietPage
        .getChooseCityButton()
        .click()
      chooseDietPage
        .getFitHarmonyDietButton()
        .click()
      chooseDietPage
        .getMealsVariant()
        .click()
      chooseDietPage
        .getCaloriesVariant()
        .click()
      chooseDietPage
        .getChooseMeals()
        .click()
      chooseDietPage
        .getNextStepButton()
        .click()
      deliveryTimePage
        .assertOrderInformation() 
      deliveryTimePage
        .checkDietPerDayPrice(dietPrice)
      deliveryTimePage
        .checkTotalPrice(dietPrice , 5)
      deliveryTimePage
        .checkToPay(dietPrice , 5)
      cy
        .get('div[class="calendar__day"]')
        .contains(todayPlusThreeDays)
        .click()
      deliveryTimePage
        .checkDiscountBarDescription()
      deliveryTimePage
        .checkDaysCount(5)
      deliveryTimePage
        .getBackButton()
        .should('be.enabled')
        .and('be.visible')
      deliveryTimePage
        .getPlusButton()
        .click()
      deliveryTimePage
        .checkDaysCount(6)
      deliveryTimePage
        .getMinusButton()
        .click()
      deliveryTimePage
        .checkDaysCount(5)
      deliveryTimePage
        .getDaysInput()
        .type('{selectall}')
        .type(20)
      deliveryTimePage
        .checkDietPerDayPrice(priceAfterRabat)
      deliveryTimePage
        .checkTotalPrice(priceAfterRabat , 20)
      deliveryTimePage
        .checkToPayAfterRabat(priceAfterRabat , 20)
      deliveryTimePage
        .activeDiscountAsseration()
      deliveryTimePage
        .checkDiscountValue(dietPrice * 0.1 , 20)
      deliveryTimePage
        .getAddtoCartButton()
        .should('be.visible')
        .click({force : true})
      cartPage
        .allHeadersAsseration()
      cartPage
        .checkDietInformation()
      cartPage
        .checkOrderSum(priceAfterRabat , 20 , 1)
      cartPage
        .getPerDayPrice()
        .should($el => expect(
          $el.text().trim()).to.equal(`${priceAfterRabat.toFixed(2)
          .replace("." , ",")} zł / dzień`));
      cartPage
        .getBackButton()
        .and('be.visible')
      cartPage
        .getCheckoutButton()
        .should('be.visible')
      cartPage
        .getChangeDietButton()
        .should('be.visible')
      cartPage
        .getDeleteDietButton()
        .should('be.visible')
      cartPage
        .getAddAnotherDietButton()
        .should('be.visible')
 
    })
    it('Add another diet' , () => {
      cartPage
        .getAddAnotherDietButton()
        .click()
      chooseDietPage
        .getSeeMore()
        .click()
      chooseDietPage
        .getLess()
        .click()
      chooseDietPage
        .getFreeHarmonyButton()
        .click()
      chooseDietPage
        .getMealsVariant()
        .click()
      chooseDietPage
        .getCaloriesVariant()
        .click()
      chooseDietPage
        .getChooseMeals()
        .click()
      chooseDietPage
        .getNextStepButton()
        .click()
      cy
        .get('div[class="calendar__day"]')
        .contains(todayPlusThreeDays)
        .click()
      deliveryTimePage
        .getAddtoCartButton()
        .click({force : true})
    })
    it('Change diet ' , () =>{
      cartPage
        .getChangeDietButton()
        .click()
      chooseDietPage
        .getFreeWegeHarmonyDietButton()
        .click()
        chooseDietPage
        .getMealsVariant()
        .click()
      chooseDietPage
        .getCaloriesVariant()
        .click()
      chooseDietPage
        .getChooseMeals()
        .click()
      chooseDietPage
        .getNextStepButton()
        .click()
      cy
        .get('div[class="calendar__day"]')
        .contains(todayPlusThreeDays)
        .click()
      deliveryTimePage
        .getAddtoCartButton()
        .click({force : true})
    })
    it('Change quantity of diet', () =>{
      cartPage
        .getPlusButton()
        .click()
      cartPage
        .getMinusButton()
        .click()
    })
    it('Remove diet' ,() => {
      cartPage
        .getDeleteDietButton()
        .click()
      cartPage
        .checkDeleteDietModal()
      cartPage
        .getDeteleConfirmButton()
        .click()
    })
  })
  