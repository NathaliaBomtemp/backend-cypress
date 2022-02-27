/// <reference types="cypress" />

function usersList() {
  //get client http
  return cy.request({
    method: "GET",
    url: "Users",
    failOnStatusCode: false,
  });
}
export { usersList };
