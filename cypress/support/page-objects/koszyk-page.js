import { cartSelectors } from "../../selectors/koszyk-selectors";

class CartPage {
    getPlusButton(){
        return cy.xpath(cartSelectors.plusButton)
    }
    
    getMinusButton(){
        return cy.xpath(cartSelectors.minusButton)
    }

    getBackButton(){
        return cy.xpath(cartSelectors.backButton)
    }
    
    getCheckoutButton(){
        return cy.xpath(cartSelectors.checkoutButton)
    }

    getChangeDietButton(){
        return cy.xpath(cartSelectors.changeDietButton)
    }

    getDeleteDietButton(){
        return cy.xpath(cartSelectors.deleteDietButton)
    }

    getAddAnotherDietButton(){
        return cy.xpath(cartSelectors.addAnotherDietButton)
    }

    checkOrderSum(dietPrice , days, quantity){
        cy.xpath(cartSelectors.orderSum).should('contain' , dietPrice * days * quantity)
    }
    getPerDayPrice(){
        return cy.xpath(cartSelectors.perDayPrice)
    }
    getDeteleConfirmButton(){
        return cy.xpath(cartSelectors.deleteDietConfirmationButton)
    }

    allHeadersAsseration(){
        cy.contains('h3' , 'Podsumowanie').should('exist')
        cy.contains('h3' , 'Podsumowanie').should('exist')
        cy.contains('h4' , 'Otrzymasz 1 400 pkt do skarbonki').should('exist')
    }
    checkDeleteDietModal(){
        cy.contains('Usuń dietę').should('exist')
        cy.contains('Czy na pewno chcesz usunąć dietę z koszyka?').should('exist')
    }
    checkDietInformation(){
        cy.contains('p' , 'FIT HARMONY').should('exist')
        cy.contains('p' , '4 POSIŁKI').should('exist')
        cy.contains('p' , '1800 kcal').should('exist')
        cy.contains('div', 'Posiłki').should('exist')
        cy.contains('div', 'Śniadanie, Obiad, Podwieczorek, Kolacja').should('exist')
    }
}

export const cartPage = new CartPage()