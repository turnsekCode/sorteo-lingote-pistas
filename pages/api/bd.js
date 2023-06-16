import { pool } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const [sorteo] = await pool.query("SELECT * FROM sorteo");
    res.status(200).json({ sorteo });
  }
  if (req.method === "POST") {
    const result = await pool.query("INSERT INTO sorteo SET ?", {
      nombre: req.body.name,
      correo: req.body.email,
      telefono: req.body.subject,
      pista: req.body.subject,
    });
    res.status(200).json({
      result: result,
    });
    //res.status(200).json({ response: { message1, sorteo1: sorteo1 } });
  }
}
