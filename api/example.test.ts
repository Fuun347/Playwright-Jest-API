import request from "supertest";

describe("", () => {
  it("", async () => {
    const req = await request("https://api.publicapis.org")
      .get("");
    console.log(req);
  });
});