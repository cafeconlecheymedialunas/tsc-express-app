import { Schema, Types, model, Model } from "mongoose";
import { CarInterface } from "../interfaces/car.interface";

const CarSchema = new Schema<CarInterface>(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            enum: ["gasoline", "electric"],
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const carModel = model("cars", CarSchema);
export default carModel;