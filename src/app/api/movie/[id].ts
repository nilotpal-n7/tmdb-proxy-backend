import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbFetch } from "@/app/lib/tmdb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  try {
    const data = await tmdbFetch(`/movie/${id}`);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
