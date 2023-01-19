// servicio encargado de la autenticacion

import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const registerNewUser = async ({ name, email, password }: User) => {
  const checkIs = await UserModel.findOne({ email });

  if (checkIs) return "ALREADY REGISTERED";

  const registerNewUser = await UserModel.create({name, email, password });

  return registerNewUser;
};

const loginUser = async () => {};

export { registerNewUser, loginUser };
