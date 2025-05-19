import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;
  if (!search) return res.status(400).json({ error: "Missing search" });

  try {
    const data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${search}&api_key=afb47585537b86dec25d50d1ee9d31e9`);
    if (!data.ok) throw new Error(`TMDB error: ${res.status}`);
    res.status(200).json(data.json());
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
