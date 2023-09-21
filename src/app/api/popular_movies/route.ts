import { NextResponse } from "next/server";

const API_TOKEN: string = process.env.API_TOKEN as string;

export async function GET() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular";
  const res = await fetch(`${API_URL}`, {
    headers: {
      "Content-type": "Application-json",
      Authorization: API_TOKEN,
    },
  });
  const data = await res.json();
  return NextResponse.json({ data: data.results });
}
