import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbFetch } from "@/lib/tmdb";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await tmdbFetch("/trending/movie/day");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
