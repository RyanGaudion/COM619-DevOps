describe("Update Room Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("updates a room", () => {
      cy.getByData("room-item").should("have.length", 18);
      cy.getByData("capacity").eq(0).contains("10")
      cy.getByData("edit-icon").eq(0).click();
      cy.getByData("capacity-input").clear().type("45");
      cy.getByData("submit-button").click();
      cy.getByData("success-alert").should("exist");
      cy.visit("/");
      cy.getByData("room-item").should("have.length", 18);
      cy.getByData("capacity").eq(0).contains("45")
    });
  });
  
  export {}; // this is to fix typescript complaint
  