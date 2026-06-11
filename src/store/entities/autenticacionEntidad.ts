import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { EstadoAutenticacion } from "@/interfaces/autenticacion.interface";
import type { EstadoRaiz } from "@/store";
import { iniciarSesionProceso } from "@/store/processes/inicioSesionProceso";

const estadoInicial: EstadoAutenticacion = {
  correo: "",
  clave: "",
  estado: "inicial",
  mensaje: "",
};

const autenticacionEntidad = createSlice({
  name: "autenticacion",
  initialState: estadoInicial,
  reducers: {
    actualizarCorreo: (estado, accion: PayloadAction<string>) => {
      estado.correo = accion.payload;
    },
    actualizarClave: (estado, accion: PayloadAction<string>) => {
      estado.clave = accion.payload;
    },
    limpiarMensaje: (estado) => {
      estado.mensaje = "";
    },
  },
  extraReducers: (constructor) => {
    constructor
      .addCase(iniciarSesionProceso.pending, (estado) => {
        estado.estado = "cargando";
        estado.mensaje = "Validando acceso...";
      })
      .addCase(iniciarSesionProceso.fulfilled, (estado, accion) => {
        estado.estado = "exito";
        estado.mensaje = accion.payload.mensaje;
      })
      .addCase(iniciarSesionProceso.rejected, (estado, accion) => {
        estado.estado = "error";
        estado.mensaje =
          accion.payload ?? "No fue posible validar el acceso.";
      });
  },
});

export const { actualizarCorreo, actualizarClave, limpiarMensaje } =
  autenticacionEntidad.actions;

export const selectorAutenticacion = (estado: EstadoRaiz) =>
  estado.autenticacion;

export default autenticacionEntidad.reducer;
