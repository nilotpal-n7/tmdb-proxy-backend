import type { NextApiRequest, NextApiResponse } from "next";
import { tmdbFetch } from "@/lib/tmdb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.query as string;
  if (!query) return res.status(400).json({ error: "Missing query param" });

  try {
    const data = await tmdbFetch("/search/movie", `query=${encodeURIComponent(query)}`);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}
