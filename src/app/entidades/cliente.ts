import { TipoIdentificacion } from "./tipoIdentificacion";

export class Cliente{
  id:number;
  tipoIdentificacion:TipoIdentificacion = new TipoIdentificacion();
  identificacion:string;
  razonSocial:string;
  fechaRegistro:Date;
  estado:string;
}
