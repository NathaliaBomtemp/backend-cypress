/// <reference types="cypress" />

const payloadPutUser = require("../payloads/put-user.json");

function updateUser() {
  return cy
    .request({
      method: "PUT",
      url: "Users/1",
      failOnStatusCode: false,
      body: payloadPutUser,
    })
    .then((response) => {
      expect(response.body).to.be.not.null;
      expect(response.body).to.be.not.empty;
    });
}
export { updateUser };
