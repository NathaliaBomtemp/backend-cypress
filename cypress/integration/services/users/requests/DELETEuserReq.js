/// <reference types="cypress" />

function deleteUser() {
  return cy
    .request({
      method: "DELETE",
      url: "Users/8",
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.body).to.be.not.null;
    });
}
export { deleteUser };
