import { deliveryTimeSelectors } from "../../selectors/termin-dostawy-selectors";

class DeliveryTimePage {
    getPlusButton(){
        return cy.xpath(deliveryTimeSelectors.plusButton)
    }
    
    getMinusButton(){
        return cy.xpath(deliveryTimeSelectors.minusButton)
    }

    getDaysInput(){
        return cy.xpath(deliveryTimeSelectors.daysInput)
    }

    getAddtoCartButton(){
        return cy.xpath(deliveryTimeSelectors.addToCartButton)
    }

    getBackButton(){
        return cy.xpath(deliveryTimeSelectors.backButton)
    }

    assertOrderInformation(){
        cy.contains('span' , 'Liczba dni').should('exist')
        cy.contains('span' , 'Liczba zestawów').should('exist')
        cy.contains('span' , 'Cena za dzień').should('exist')
        cy.contains('span' , 'Cena łącznie').should('exist')
        cy.contains('span' , 'Dodatki łącznie').should('exist')
        cy.contains('span' , 'Do zapłaty').should('exist')
   }
    activeDiscountAsseration(){
        cy.contains('span' , '10% rabatu za długość zamówienia').should('exist')
    }

   checkDietPerDayPrice(dietPrice){
        cy.xpath(deliveryTimeSelectors.pricePerDayContainer).should('contain' , dietPrice)      
   }

   checkTotalPrice(dietPrice , days){
       cy.xpath(deliveryTimeSelectors.totalPriceContainer).should('contain' , dietPrice * days)
   }
   checkToPay(dietPrice , days){
       cy.xpath(deliveryTimeSelectors.toPayContainer).should('contain' , dietPrice * days)
   }
   checkToPayAfterRabat(dietPrice , days){
    cy.xpath(deliveryTimeSelectors.toPayAfterRabat).should('contain' , dietPrice * days)
   }
   checkDiscountValue(dietPrice , days){
       cy.xpath(deliveryTimeSelectors.discountValue).should('contain' , dietPrice * days)
   }
   checkDiscountBarDescription(){
       cy.contains('Dodaj jeszcze 15 dni aby uzyskać 10% zniżki').should('exist')
   }
   checkDaysCount(days){
       cy.xpath(deliveryTimeSelectors.daysCount).should('contain' , days)
   }

}

export const deliveryTimePage = new DeliveryTimePage()