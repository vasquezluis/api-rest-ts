// controlador para la autenticacion

import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerController = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);

  res.send(responseUser);
};

const loginController = async () => {};

export { registerController, loginController };
