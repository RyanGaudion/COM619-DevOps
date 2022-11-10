describe("Delete Room Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("deletes a room", () => {
      cy.getByData("room-item").should("have.length", 18);
      cy.getByData("delete-icon").eq(0).click();
    });
  });
  
  export {}; // this is to fix typescript complaint
  