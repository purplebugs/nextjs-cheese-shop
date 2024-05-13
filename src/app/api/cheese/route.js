import { cheese } from "@/lib/data.js";
import { NextResponse } from "next/server";

/**
 * @openapi
 * /api/cheese:
 *   get:
 *     description: Returns list of cheese
 *     responses:
 *       200:
 *         description: Returns list of cheese
 */
export async function GET(req) {
  // http://localhost:3000/api/cheese

  return NextResponse.json(cheese, { status: 200 });
}
