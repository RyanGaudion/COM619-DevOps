describe("Create Page Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/create");
    });
  
    it("prevents non-valid form", () => {
      cy.getByData("submit-button").click(); // we can just grab selectors, JQUERY style
      cy.getByData("building-error").contains("A valid building is required");
      cy.getByData("number-error").contains("Room number is required");
      cy.getByData("capacity-error").contains("Capacity is required (between 5 & 50)");
      cy.getByData("type-error").contains("Type is required");
    });
  
    it("hides errors as type", () => {
        cy.getByData("submit-button").click();

        cy.getByData("building-error").contains("A valid building is required");
        cy.getByData("building-input").first().click()
        cy.getByData("building-error").should("not.exist")

        cy.getByData("number-error").contains("Room number is required");
        cy.getByData("number-input").type("5")
        cy.getByData("number-error").should("not.exist")

        cy.getByData("capacity-error").contains("Capacity is required (between 5 & 50)");
        cy.getByData("capacity-input").type("7")
        cy.getByData("capacity-error").should("not.exist")

        cy.getByData("type-error").contains("Type is required");
        cy.getByData("room-input").first().click()
        cy.getByData("type-error").should("not.exist")
    });
  });
  
  export {}; // this is to fix typescript complaint