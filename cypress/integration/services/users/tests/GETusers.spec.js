import * as GETUsers from "../requests/GETusersReq";

describe("GET Users", () => {
  it("Get users list", () => {
    GETUsers.usersList().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
      expect(response.body).to.be.not.empty;
      cy.log(response.body);
    });
  });
});
