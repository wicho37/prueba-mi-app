/*import style from "./Login.module.css";




 const Login = () => {
  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Iniciar sesión</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Contraseña"
        className={styles.input}
      />

      <button className={styles.button}>Ingresar</button>
    </div>
  );
};

export default Login; */



import { useState } from "react";
import styles from "./Login.module.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Simulación de login (puedes conectar a backend aquí)
    if (email === "admin@test.com" && password === "123456") {
      setError("");
      onLogin({ email });
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

        {error && <p className={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}