import { NextResponse } from "next/server";

const API_TOKEN: string = process.env.API_TOKEN as string;

export async function GET(
  request: Request,
  { params }: { params: { query: string } }
) {
  const query = params.query;

  const API_URL = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  const res = await fetch(`${API_URL}`, {
    headers: {
      "Content-type": "Application-json",
      Authorization: API_TOKEN,
    },
  });

  const data = await res.json();
  return NextResponse.json({ data });
}
