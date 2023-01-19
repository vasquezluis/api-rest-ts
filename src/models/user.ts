import { Schema, Types, model, models } from "mongoose";
import { User } from "../interfaces/user.interface";

// schema
// el schema tiene que cumplir con la interfaz Car
const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Soy la descripcion",
    },
  },
  { timestamps: true, versionKey: false }
);

// modelo
const UserModel = model("users", UserSchema);
export default UserModel;
