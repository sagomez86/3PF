import { Usuario } from "src/app/usuarios/models/usuario";

export interface Sesion {
    sesionActiva: boolean;
    usuarioActivo?:Usuario
}
