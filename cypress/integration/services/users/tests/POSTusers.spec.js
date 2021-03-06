import * as POSTUser from "../requests/POSTusersReq";

describe("POST Users", () => {
  it("Add new user", () => {
    POSTUser.newUser().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(11);
      expect(response.body.userName).to.eq("User11");
      expect(response.body.password).to.eq("password11");

      expect(response.body).to.be.not.null;
      expect(response.body).to.be.not.empty;
    });
  });

  it("Try to add a invalid user", () => {
    POSTUser.invalidUser().should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.title).to.eq("One or more validation errors occurred.")

    });
  });
});
