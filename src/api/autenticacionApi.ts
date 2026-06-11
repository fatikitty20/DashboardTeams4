import type {
  CredencialesAcceso,
  RespuestaAutenticacion,
} from "@/interfaces/autenticacion.interface";

export async function solicitarInicioSesion(
  credenciales: CredencialesAcceso,
): Promise<RespuestaAutenticacion> {
  void credenciales;

  throw new Error("La API de autenticacion todavia no esta disponible.");
}
