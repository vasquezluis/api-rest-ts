import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/*
 * index.ts [''.'ts']
 * * Este archivo es un cargador dinamico de rutas
 * El nombre de archivo es el nombre de la ruta
 */

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== "index") {
    // importacion dinamica de ts
    import(`./${cleanName}`).then((moduleRoute) => {
      console.log(`Se esta cargando la ruta... ${cleanName}`);
      router.use(`/${cleanName}`, moduleRoute.router);
    });
  }
});

export default Router;
