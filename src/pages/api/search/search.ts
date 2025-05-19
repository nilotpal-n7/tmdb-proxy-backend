import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;
  if (!search) return res.status(400).json({ error: "Missing search" });

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
        search as string
      )}&api_key=afb47585537b86dec25d50d1ee9d31e9`
    );

    if (!response.ok) throw new Error(`TMDB error: ${response.status}`);
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
