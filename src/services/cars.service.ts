import { CarInterface } from "../interfaces/cars.interface";
import carModel from "../models/cars.model";

const insertCarService = async (car: CarInterface) => {
    const responseInsert = await carModel.create(car);
    return responseInsert;
};

const getCarsService = async () => {
    const responseCar = await carModel.find({});
    return responseCar;
};

const getCarService = async (id: string) => {
    const responseCar = await carModel.findOne({ _id: id });
    return responseCar;
};

const updateCarService = async (id: string, data: CarInterface) => {
    const responseCar = await carModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return responseCar;
};

const deleteCarService = async (id: string) => {
    const responseCar = await carModel.deleteOne({ _id: id });
    return responseCar;
};

export { insertCarService, getCarsService, getCarService, updateCarService, deleteCarService };