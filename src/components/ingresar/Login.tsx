import styles from "./Login.module.css";




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

export default Login;
