import { Factura } from "./factura";
import { Producto } from "./producto";

export class FacturaDetalle{
  factura: Factura = new Factura();
  producto: Producto = new Producto();
  cantidad: number;
  valor: number;
}
