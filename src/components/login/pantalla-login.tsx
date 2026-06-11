"use client";

import type { ChangeEvent, FormEvent } from "react";

import {
  actualizarClave,
  actualizarCorreo,
  limpiarMensaje,
  selectorAutenticacion,
} from "@/store/entities/autenticacionEntidad";
import { useDespachoApp, useSelectorApp } from "@/store/hooks";
import { iniciarSesionProceso } from "@/store/processes/inicioSesionProceso";

import estilos from "./pantalla-login.module.css";

type Tono = "rojo" | "verde" | "azul";

type TarjetaResumen = {
  titulo: string;
  valor: string;
  tono: Tono;
};

const tarjetasResumen: TarjetaResumen[] = [
  {
    titulo: "Alertas",
    valor: "03",
    tono: "rojo",
  },
  {
    titulo: "Procesos",
    valor: "12",
    tono: "verde",
  },
  {
    titulo: "Servicios",
    valor: "08",
    tono: "azul",
  },
];

function obtenerClaseDeTono(tono: Tono) {
  return estilos[tono];
}

export function PantallaLogin() {
  const despacho = useDespachoApp();
  const { correo, clave, estado, mensaje } = useSelectorApp(
    selectorAutenticacion,
  );

  const botonDeshabilitado =
    correo.trim().length === 0 ||
    clave.trim().length === 0 ||
    estado === "cargando";

  const textoBoton = estado === "cargando" ? "Validando..." : "Entrar";

  function manejarCambioCorreo(evento: ChangeEvent<HTMLInputElement>) {
    despacho(actualizarCorreo(evento.target.value));
  }

  function manejarCambioClave(evento: ChangeEvent<HTMLInputElement>) {
    despacho(actualizarClave(evento.target.value));
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    despacho(limpiarMensaje());
    void despacho(iniciarSesionProceso({ correo, clave }));
  }

  return (
    <main className={estilos.pagina}>
      <section className={estilos.contenedorPrincipal}>
        <section className={estilos.panelFormulario}>
          <div className={estilos.bloqueMarca}>
            <p className={estilos.etiqueta}>Dashboard PSP</p>
            <h1 className={estilos.titulo}>Control de acceso</h1>
            <p className={estilos.textoPrincipal}>
              Ingresa tu correo y tu clave para entrar al panel principal.
            </p>
          </div>

          <form className={estilos.formulario} onSubmit={manejarEnvio}>
            <label className={estilos.campo}>
              <span>Correo</span>
              <input
                type="email"
                name="correo"
                autoComplete="email"
                placeholder="usuario@empresa.com"
                value={correo}
                onChange={manejarCambioCorreo}
              />
            </label>

            <label className={estilos.campo}>
              <span>Clave</span>
              <input
                type="password"
                name="clave"
                autoComplete="current-password"
                placeholder="********"
                value={clave}
                onChange={manejarCambioClave}
              />
            </label>

            <button
              className={estilos.botonPrincipal}
              type="submit"
              disabled={botonDeshabilitado}
            >
              {textoBoton}
            </button>
          </form>

          <div className={estilos.recuadroInfo}>
            <span className={`${estilos.punto} ${estilos.azul}`} />
            Acceso institucional para usuarios del panel.
          </div>

          {mensaje ? (
            <div className={estilos.recuadroEstado}>
              <span
                className={`${estilos.punto} ${
                  estado === "error" ? estilos.rojo : estilos.verde
                }`}
              />
              {mensaje}
            </div>
          ) : null}

          <div className={estilos.rejillaResumen}>
            {tarjetasResumen.map((tarjeta) => (
              <article className={estilos.tarjetaResumen} key={tarjeta.titulo}>
                <span
                  className={`${estilos.punto} ${obtenerClaseDeTono(tarjeta.tono)}`}
                />
                <p className={estilos.tituloTarjeta}>{tarjeta.titulo}</p>
                <strong className={estilos.valorTarjeta}>{tarjeta.valor}</strong>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
