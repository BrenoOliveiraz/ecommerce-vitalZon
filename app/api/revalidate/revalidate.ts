// /pages/api/revalidate.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const secret = req.query.secret;

    // segurança opcional: valide o token
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // revalida páginas específicas
    await res.revalidate("/allProducts");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}
