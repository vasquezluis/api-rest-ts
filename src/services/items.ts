import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items";

// un servicio es el encargado de la logica del negocio

const getCar = async (id: string) => {
  const responseItems = await ItemModel.findOne({ _id: id });
  return responseItems;
};

const getCars = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};

// los parametros tienen que cumplir con la interfaz Car
const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const updateCar = async (id: string, data: Car) => {
  // query con dos referencias: la busqueda y la data a actualizar, new: true para responder con los datos nuevos, no viejos
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  return responseItem;
};

const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });

  return responseItem;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
