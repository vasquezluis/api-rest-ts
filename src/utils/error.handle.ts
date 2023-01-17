import { Response } from "express";

/*
 * Manejador de errores
 */

const handleHttp = (res: Response, error: string) => {
  res.status(500).json({ error });
};

export { handleHttp };
