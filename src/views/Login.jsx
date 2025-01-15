import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./../styles/Sesion.module.css";
import { InputCell, InputPassword } from "./../components/Inputs";
import classNames from "classnames";

function Login() {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/Home");
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
                En caso de tener algun problema, comuniquese con su adminsitrador.
                </p>
              </div>

              <div className={styles.form_group}>
                <InputCell
                  type="tel"
                  name="Número de celular"
                  id="userInput"
                  placeHolder="Usuario"
                  req={true}
                />
              </div>

              <InputPassword
                name="password"
                id="passwordInput"
                placeHolder="Contrseña"
              />

              <div>
                <button
                  className={classNames(styles.button)}
                  type="button"
                  onClick={Home}
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
