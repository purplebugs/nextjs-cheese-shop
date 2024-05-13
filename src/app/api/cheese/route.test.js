/**
 * @jest-environment node
 */
import { GET } from "./route";

describe("GET /api/cheese", () => {
  it("should return data with status 200", async () => {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.length).toBe(3);
  });
});
