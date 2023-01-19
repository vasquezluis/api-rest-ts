import { Response } from "express";

/*
 * Manejador de errores
 */

// ? decir que no extrictamente requerido
const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw.message);
  res.status(500).json({ error });
};

export { handleHttp };
