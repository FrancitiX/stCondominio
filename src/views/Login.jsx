import React, { useState } from "react";
import { InputCell, InputPassword } from "./../components/Inputs";
import { log_in } from "../utils/user";
import styles from "./../styles/Sesion.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    try {
      const result = await log_in(cellphone, password);
      console.log(result);

      if (result) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <>
      <div className={styles.form_container}>
        <div className={styles.form_data}>
          <div className={styles.form_left}>
            <h1 className={styles.title}>Inicar sesion</h1>
            <form>
              <div className="center">
                <p className={styles.helpText}>
                  En caso de tener algun problema, comuniquese con su
                  adminsitrador.
                </p>
              </div>

              <div className={styles.form_group}>
                <InputCell
                  type="tel"
                  id="userInput"
                  placeHolder="Usuario"
                  req={true}
                  value={cellphone}
                  change={(e) => setCellphone(e.target.value)}
                />
              </div>

              <InputPassword
                name="password"
                id="passwordInput"
                placeHolder="Contrseña"
                value={password}
                change={(e) => setPassword(e.target.value)}
              />

              <div>
                <button
                  className={classNames(styles.button)}
                  type="button"
                  onClick={Login}
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <div className={styles.form_right}>
            <img className={styles.logo} src="Logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
