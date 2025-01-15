import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./../styles/Sesion.module.css";
import { InputUser, InputPassword } from "./../components/Inputs";
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
          <div>
            <h1 className={styles.title}>Inicar sesion</h1>
            <form>
              <div className="center">
                <p className={styles.helpText}>
                  En caso de tener algun problema, por favor contacta con algun administrador
                </p>
              </div>

              <div className={styles.form_group}>
                <InputUser
                  type="text"
                  name="user"
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
                  className={classNames(styles.buttonSesion, styles.next)}
                  type="button"
                  onClick={Home}
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
          <div>
            <img className={styles.logo} src="Logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
