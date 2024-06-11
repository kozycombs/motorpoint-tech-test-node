import { request } from "../../helpers";

describe("Vehicle test", () => {
  it("should handle Get all vehicles request", async () => {
    const res = await request.get("/api/vehicles");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(1);
  });
});
