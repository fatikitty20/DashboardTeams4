import estilos from "./page.module.css";

type Tono = "rojo" | "verde" | "azul";

type TarjetaResumen = {
  titulo: string;
  tono: Tono;
};

const tarjetasResumen: TarjetaResumen[] = [
  {
    titulo: "Alertas",
    tono: "rojo",
  },
  {
    titulo: "Procesos",
    tono: "verde",
  },
  {
    titulo: "Servicios",
    tono: "azul",
  },
];

function obtenerClaseDeTono(tono: Tono) {
  return estilos[tono];
}

export default function PaginaLogin() {
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

          <form className={estilos.formulario}>
            <label className={estilos.campo}>
              <span>Correo</span>
              <input
                type="email"
                name="correo"
                autoComplete="email"
                placeholder="usuario@empresa.com"
              />
            </label>

            <label className={estilos.campo}>
              <span>Clave</span>
              <input
                type="password"
                name="clave"
                autoComplete="current-password"
                placeholder="********"
              />
            </label>

            <button className={estilos.botonPrincipal} type="button" disabled>
              Entrar
            </button>
          </form>

          <div className={estilos.recuadroInfo}>
            <span className={`${estilos.punto} ${estilos.azul}`} />
            Acceso institucional para usuarios del panel.
          </div>

          <div className={estilos.rejillaResumen}>
            {tarjetasResumen.map((tarjeta) => (
              <article className={estilos.tarjetaResumen} key={tarjeta.titulo}>
                <span
                  className={`${estilos.punto} ${obtenerClaseDeTono(tarjeta.tono)}`}
                />
                <p className={estilos.tituloTarjeta}>{tarjeta.titulo}</p>
                
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
