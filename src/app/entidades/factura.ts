import { Cliente } from "./cliente";

export class Factura{
  id:number;
  cliente:Cliente = new Cliente();
  fecha:Date;
}
