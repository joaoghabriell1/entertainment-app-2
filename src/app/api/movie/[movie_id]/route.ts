import { NextResponse } from "next/server";

const API_TOKEN: string = process.env.API_TOKEN as string;

export async function GET(
  request: Request,
  { params }: { params: { movie_id: string } }
) {
  const id = params.movie_id;
  const API_URL = `https://api.themoviedb.org/3/movie/${id}`;
  const res = await fetch(`${API_URL}`, {
    headers: {
      "Content-type": "Application-json",
      Authorization: API_TOKEN,
    },
  });

  const data = await res.json();
  console.log(data);
  return NextResponse.json({ data });
}
