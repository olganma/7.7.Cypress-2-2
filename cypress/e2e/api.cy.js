import user from "../fixtures/user.json";
import userUpdate from "../fixtures/userUpdate.json";
import userDel from "../fixtures/userDel.json";

describe("petstore user api", () => {
  it("should create user", () => {
    cy.request("POST", "/user", user).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).eq(200);
    });
    cy.request(`/user/${user.username}`).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).eqls(user);
    });
  });

  it("should update user", () => {
    cy.request("POST", "/user", user);
    cy.request("PUT", `/user/${user.username}`, userUpdate).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).eq(200);
    });
    cy.request(`/user/${userUpdate.username}`).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).eqls(userUpdate);
    });
  });

  it("should delete user", () => {
    cy.request("POST", "/user", userDel);
    cy.request("DELETE", `/user/${userDel.username}`).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).eq(200);
    });
    cy.getFailRequest(`/user/${userDel.username}`).then((response) => {
      expect(response.status).eq(404);
    });
  });
});
