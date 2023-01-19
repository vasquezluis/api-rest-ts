import { Request, Response } from "express";
import {
  getCar,
  insertCar,
  getCars,
  updateCar,
  deleteCar,
} from "../services/items";
import { handleHttp } from "../utils/error.handle";

/**
 * * Un Controlador es una orquestacion entre infraestructura y logica de negocio
 * * Solo debe enterarse de las cosas que vienen por http (req, res)
 * * no hace logica de negocio
 * ! solo recibir datos
 */

const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const response = await getCar(id);

    const data = response ? response : `${id} NOT FOUND`;

    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM", error);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS", error);
  }
};

const postItems = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);

    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEMS", error);
  }
};

const updateItems = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const response = await updateCar(id, req.body);

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEMs", error);
  }
};

const deleteItems = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const response = await deleteCar(id);

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEMS", error);
  }
};

export { getItem, getItems, postItems, updateItems, deleteItems };
