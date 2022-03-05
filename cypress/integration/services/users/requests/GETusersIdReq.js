/// <reference types="cypress" />

function userByID() {
  return cy
    .request({
      method: "GET",
      url: "Users/1",
      failOnStatusCode: false,
      headers: { id: 1 },
    })
    .then((response) => {
      expect(response.body).to.be.not.null;
      expect(response.body).to.be.not.empty;
    });
}
export { userByID };
