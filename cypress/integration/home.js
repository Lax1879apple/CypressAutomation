describe('User navigates to home page', function()
{

    it('User navigates to home page', function(){
        // code goes here
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.wait(2000);
        //validate title
        cy.title().should('eq','GreenKart - veg and fruits kart');
        cy.get('.search-keyword').type('ca');
        // validate search results 4 items only
        //"div.product" is locator for the items. This results 5 elements and 1 element is not visible.
        // pass ":visible" value as shown below after "div.product" to inteligently 
        //tell cypress to look for visible items only and ignore invisible ones
        cy.get('div.product:visible').should('have.length', 4);
        cy.wait(2000);
        cy.get(':nth-child(2) > .product-action > button').click().contains('[type="button"]', 'ADDED');
        //cy.get(':nth-child(2) > .product-action > button').should('eq', "ADDED");

    })
})