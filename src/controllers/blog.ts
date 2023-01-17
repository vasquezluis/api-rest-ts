import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

/**
 * * Un Controlador es una orquestacion entre infraestructura y logica de negocio
 * * Solo debe enterarse de las cosas que vienen por http (req, res)
 * * no hace logica de negocio
 * ! solo recibir datos
 */

const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const postItems = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

const updateItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

const deleteItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

export { getItem, getItems, postItems, updateItems, deleteItems };
