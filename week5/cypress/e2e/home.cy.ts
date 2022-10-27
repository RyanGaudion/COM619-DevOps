describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("shows a table containing a list of rooms", () => {
      cy.get("tr").contains("HC208"); // we can just grab selectors, JQUERY style
      cy.getByData("room-item").contains("RM202");
      cy.getByData("room-item").should("have.length", 18);
    });
  
    it("navigates to the add room form", () => {
      cy.getByData("add-room-button").click();
      cy.getByData("bread-crumb").should("contain", "Add Room");
    });
  });
  
  export {}; // this is to fix typescript complaint