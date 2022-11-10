/// <reference types="cypress" />
/* eslint-disable */
declare global {
  namespace Cypress {
    interface Chainable {
      //ts-ignore
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

/**
 * getting rid of this error: index.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.
 */

export {};
