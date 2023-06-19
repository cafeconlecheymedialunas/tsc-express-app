import { Request, Response } from "express";
import {
    insertCarService,
    getCarsService,
    getCarService,
    updateCarService,
    deleteCarService,
} from "../services/cars.service";
import { handleHttp } from "../utils/error.handle";

const getCarController = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCarService(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHttp(res, "ERROR_GET_CAR");
    }
};

const getCarsController = async (req: Request, res: Response) => {
    try {
        const response = await getCarsService();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_CARS");
    }
};

const updateCarController = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCarService(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_CAR");
    }
};

const insertCarController = async ({ body }: Request, res: Response) => {
    try {
        const responseCar = await insertCarService(body);
        res.send(responseCar);
    } catch (e) {
        handleHttp(res, "ERROR_POST_CAR", e);
    }
};

const deleteCarController = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCarService(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_CAR");
    }
};

export { getCarController, getCarsController, insertCarController, updateCarController, deleteCarController };