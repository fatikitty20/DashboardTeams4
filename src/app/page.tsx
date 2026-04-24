// Importamos el componente que muestra el mensaje
import { Saludo } from "@/components/Saludo";

// Esta es la página principal de la app
// export default la hace ser la página por defecto
export default function Home() {
  return (
    // main es la etiqueta semántica para contenido principal
    <main>
      {/* Usamos nuestro componente */}
      <Saludo />
    </main>
  );
}
