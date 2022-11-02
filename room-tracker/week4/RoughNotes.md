Week 5 lesson

- introduction to integration/acceptance testing
- set up Cypress
  - consider database environment (What options do we have here)?

## Installing Cypress

[Install Cypress via npm:](https://docs.cypress.io/guides/getting-started/installing-cypress)

- In your project's root directory run: `npm install cypress --save-dev`

- That's it, you can now run cypress: `npx cypress open`.

- To make life easier, for future runs, create an npm script in `package.json`:

```json
...
 "scripts": {

...
    "cypress:open": "cypress open"


...
  }

```

> > `package.json`

- You should see the following screen:

- Go through the steps (no need to change anything). Cypress should set up some config files for you

### Let's test the home page

- On the cypress dashboard: Click on the “Create a new empty spec” button. Name the spec `home`.

- Cypress should have created the file `cypress/e2e/home.cy.ts` for you. Open it up and update the contents of the file to:

```js
describe("home page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/"); // this assumes your room finder application is running on port 3000
  });

  if("shows a table containing a list of rooms", () => {
      cy.visit("http://localhost:3000/");

  })
});
```

- set up tests for the home page and add room
- add room tests
  - install formic
  - add and test error checking
