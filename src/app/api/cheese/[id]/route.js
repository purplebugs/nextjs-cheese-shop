import { cheese } from "@/lib/data.js";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  // http://localhost:3000/api/cheese/1

  const { id } = await context?.params;

  const the_cheese = cheese.find((c) => c.id === id);

  return the_cheese
    ? NextResponse.json(the_cheese, { status: 200 })
    : NextResponse.json({ message: `Cheese with id ${id} not found` }, { status: 404 });
}

export async function DELETE(req, context) {
  // http://localhost:3000/api/cheese/1

  const { id } = await context?.params;

  const the_cheese = cheese.find((c) => c.id === id);

  // Workaround: Return 200 and message
  // Instead, should return 204 and redirect to where the user should get info about what was deleted
  return the_cheese
    ? NextResponse.json({ message: `Cheese with id ${id} deleted` }, { status: 200 })
    : NextResponse.json({ message: `Cheese with id ${id} not found` }, { status: 404 });
}
