/**
 * @jest-environment node
 */

import { NextRequest } from "next/server";
import { GET, DELETE } from "./route";

describe("GET /api/cheese/[id]", () => {
  it("should return data with status 200", async () => {
    const response = await GET(NextRequest, { params: { id: "2" } });
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.name).toBe("Danbo");
  });

  it("should return Not Found with status 404", async () => {
    const id = "I-Do-Not-Exist";
    const response = await GET(NextRequest, { params: { id: id } });
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.message).toBe(`Cheese with id ${id} not found`);
  });
});

describe("DELETE /api/cheese/[id]", () => {
  it("should return data with status 200", async () => {
    const id = "2";
    const response = await DELETE(NextRequest, { params: { id: id } });
    const body = await response.json();

    expect(response?.status).toBe(200);
    console.log(response.statusText);
    expect(body.message).toBe(`Cheese with id ${id} deleted`);
  });
});
