/* 
  * una interface es como un contrato
  * no tiene logica de programacion 
  * es una declaracion de una propiedad y tipo de dato

*/

export interface Car {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  year: number;
  description: string;
  price: number;
}
