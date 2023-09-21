import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/day", {
    headers: {
      "Content-type": "Application-json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDczOWMxYTcxMDU5OTIxMWVjNDAwODdjOGNlNWU0OCIsInN1YiI6IjY1MGI2MzdmYWVkZTU5MWFiMzM4OTMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5tR_nnHxt5WCM86ST6Zw8XYezk-of-K0Bt3AbwfgkpY",
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
