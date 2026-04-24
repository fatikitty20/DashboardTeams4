// Esta carpeta es para definir las "formas" de los datos
// Por ejemplo: cómo se ve un usuario, cómo se ve un producto, etc.
// Cuando conectes con un backend, aquí definirás esas estructuras
// Definimos cómo luce la información de un intento de login
export interface LoginCredentials {
  email: string;
  password: string;
}

// Opcional: Definimos cómo luce la respuesta (para cuando conectemos la API)
export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}