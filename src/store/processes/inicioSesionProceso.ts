import { createAsyncThunk } from "@reduxjs/toolkit";

import { solicitarInicioSesion } from "@/api/autenticacionApi";
import type {
  CredencialesAcceso,
  RespuestaAutenticacion,
} from "@/interfaces/autenticacion.interface";

export const iniciarSesionProceso = createAsyncThunk<
  RespuestaAutenticacion,
  CredencialesAcceso,
  { rejectValue: string }
>("autenticacion/iniciarSesionProceso", async (credenciales, herramientas) => {
  const { rejectWithValue } = herramientas;

  try {
    return await solicitarInicioSesion(credenciales);
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue("Ocurrio un error inesperado en el proceso.");
  }
});
