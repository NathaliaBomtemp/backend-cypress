/// <reference types="cypress" />

const payloadAddUser = require("../payloads/add-user.json");
const payloadInvalidUser = require("../payloads/add-invalid-user.json");

function newUser() {
  return cy.request({
    method: "POST",
    url: "Users",
    failOnStatusCode: false,
    body: payloadAddUser,
  });
}
export { newUser };

function invalidUser() {
  return cy.request({
    method: "POST",
    url: "Users",
    failOnStatusCode: false,
    body: payloadInvalidUser,
  });
}
export { invalidUser };
