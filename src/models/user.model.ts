import { Schema, Types, model, Model } from "mongoose";
import { UserInterface } from "../interfaces/user.interfaces";

const UserSchema = new Schema<UserInterface>(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "Soy la descripcion"
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const userModel = model("users", UserSchema);
export default userModel;