describe("Home Page Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("shows a table containing a list of rooms", () => {
    cy.getByData("room-item").contains("HC208");
    cy.getByData("room-item").contains("RM202");
    cy.getByData("room-item").should("have.length", 18);
  });

  it("navigates to the add room form", () => {
    cy.getByData("add-room-button").click();
  });
});

export {}; // this is to fix typescript complaint
