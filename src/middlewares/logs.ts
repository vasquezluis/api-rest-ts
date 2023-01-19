// un middleware esta entre una ruta y un controllador

import { NextFunction, Request, Response } from "express";

// el nextFunction se encarga de continuar o no continuar
// se implementa en las rutas
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;

  const userAgent = header["user-agent"];

  console.log("user-agent", userAgent);

  next();
};

export { logMiddleware };
