// lib/tmdb.ts
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function tmdbFetch(path: string, query: string = "") {
  const url = `${TMDB_BASE_URL}${path}?api_key=${TMDB_API_KEY}&language=en-US&${query}`;
  console.log('URL: ', url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`TMDB error: ${res.status}`);
  return res.json();
}
