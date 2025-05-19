import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbFetch } from "@/lib/tmdb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { genreId } = req.query;
  if (!genreId) return res.status(400).json({ error: "Missing genreId" });

  try {
    const data = await tmdbFetch("/discover/movie", `with_genres=${genreId}`);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
