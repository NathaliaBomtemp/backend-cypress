import * as DeleteUser from "../requests/DELETEuserReq";

describe("DELETE User", () => {
  it("Delete user", () => {
    DeleteUser.deleteUser().should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
