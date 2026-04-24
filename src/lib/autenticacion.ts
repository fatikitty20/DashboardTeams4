export type CredencialesLogin = {
  correo: string;
  clave: string;
};

// Aqui ira la llamada real a tu backend cuando exista la API.
export async function iniciarSesion(credenciales: CredencialesLogin) {
  void credenciales;

  throw new Error("La autenticacion todavia no esta conectada a una API.");
}
