export type EstadoDeSolicitud = "inicial" | "cargando" | "error" | "exito";

export interface CredencialesAcceso {
  correo: string;
  clave: string;
}

export interface RespuestaAutenticacion {
  mensaje: string;
}

export interface EstadoAutenticacion extends CredencialesAcceso {
  estado: EstadoDeSolicitud;
  mensaje: string;
}
