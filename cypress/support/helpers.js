const { apiUrl} = Cypress.env()


export const interceptRequest = () =>{
 //   https://dietly.pl/api/dietly/open/cities/top-10
 //   https://dietly.pl/api/dietly/open/form-settings
 //   https://dietly.pl/api/profile/
 cy.intercept('GET', `${apiUrl}/dietly/open/cities/top-10`).as('getCities')
 cy.intercept('GET', `${apiUrl}/dietly/open/form-settings`).as('getFormSettings')
 cy.intercept('GET', `${apiUrl}/profile/`).as('getProfiles')
}