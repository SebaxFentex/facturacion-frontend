import { Perfil } from "./perfil";

export class Usuario{
  id: number;
  nombre: String;
  apellido: String;
  usuario: String;
  contrasena: String;
  perfil: Perfil = new Perfil();
}
