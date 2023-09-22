import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.EXTERNAL_API}/trending/movie/day`, {
    cache: "no-cache",
    headers: {
      "Content-type": "Application-json",
      Authorization: process.env.API_TOKEN as string,
    },
  });

  if (!res.ok) {
    console.log(res.status, res.statusText);
    throw new Error(res.statusText);
  }
  const data = await res.json();
  console.log(data);

  return NextResponse.json({ data: data.results });
}
