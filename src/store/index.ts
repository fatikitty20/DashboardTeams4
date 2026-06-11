import { configureStore } from "@reduxjs/toolkit";

import autenticacionReducer from "./entities/autenticacionEntidad";

export const store = configureStore({
  reducer: {
    autenticacion: autenticacionReducer,
  },
});

export type EstadoRaiz = ReturnType<typeof store.getState>;
export type DespachoApp = typeof store.dispatch;
