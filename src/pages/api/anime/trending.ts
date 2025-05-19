import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbFetch } from "@/lib/tmdb";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await tmdbFetch("/discover/tv", `with_genres=16`); // Genre ID 16 = Animation
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
