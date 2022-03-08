import * as PutUser from "../requests/PUTuserReq";

describe("PUT User", () => {
  it("Update user data", () => {
    PutUser.updateUser().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
      expect(response.body.userName).to.eq("Teste 1");
      expect(response.body.password).to.eq("teste");
    });
  });
});
