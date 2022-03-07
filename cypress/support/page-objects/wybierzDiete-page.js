import { chooseDietSelectors } from "../../selectors/wybierzDiete-selectors"

class ChooseDietPage {
    getFreeHarmonyButton(){
        return cy.xpath(chooseDietSelectors.freeHarmonyDietButton)
    }
    
    getSeeMore(){
        return cy.xpath(chooseDietSelectors.seeMore)
    }

    getLess(){
        return cy.xpath(chooseDietSelectors.less)
    }
    
    getMealsVariant(){
        return cy.xpath(chooseDietSelectors.mealsVariant)
    }

    getCaloriesVariant(){
        return cy.xpath(chooseDietSelectors.caloriesVariant)
    }

    getChooseMeals(){
        return cy.xpath(chooseDietSelectors.chooseMeals)
    }

    getNextStepButton(){
        return cy.xpath(chooseDietSelectors.nextStepButton)
    }

    getFitHarmonyDietButton(){
        return cy.xpath(chooseDietSelectors.fitHarmonyDietButton)
    }

    getFreeWegeHarmonyDietButton(){
        return cy.xpath(chooseDietSelectors.freeWegeHarmonyDietButton)
    }
    getChooseCityButton(){
        return cy.xpath(chooseDietSelectors.chooseCityButton)
    }
    
}

export const chooseDietPage = new ChooseDietPage()