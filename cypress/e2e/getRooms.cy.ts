describe("Get All Rooms", () => {
  it("passes", () => {
    const baseUrl = Cypress.config('baseUrl');
    cy.request({ method: "GET", url: `${baseUrl}/public/allroomsjson` }).then(
      (response) => {
        console.log(response.body);
        expect(response.status).to.eq(200);
        expect(response.body[0].result_message).to.eq("Rooms not found for room id all");
        expect(response.body[0].result_code).to.eq(1);
      }
    );
  });
});
