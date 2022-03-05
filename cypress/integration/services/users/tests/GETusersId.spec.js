import * as GETUserByID from "../requests/GETusersIdReq";

describe("GET User by ID", () => {
  it("Get a user", () => {
    GETUserByID.userByID().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
      expect(response.body.userName).to.eq("User 1");
      expect(response.body.password).to.eq("Password1");
    });
  });
});
