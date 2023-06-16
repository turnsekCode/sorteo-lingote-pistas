import { pool } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const sorteo = await pool({
      query: "SELECT * FROM sorteo",
      values: [],
    });
    res.status(200).json({ sorteo: sorteo });
  }
}
