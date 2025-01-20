import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../styles/components/Nav.module.css";
import Logo from "/Logo.png";
import userImage from "./../assets/Usuario.png";
import Notification from "./../assets/notification.png";
import classNames from "classnames";

function NavBar() {
  const user = localStorage.getItem("typeUser");
  const [theme, setTheme] = useState("light");

  return (
    <header>
      <nav>
        <div className={styles.nav_public}>
          <Link
            to="/Home"
            className={classNames(styles.nav_left, styles.title)}
          >
            <img src={Logo} alt="Logo" />
            <h1>Condominios SIXFT</h1>
          </Link>
          <div className={styles.nav_right}>
            <Link to="/Payments">Realizar pago</Link>
            <Link to="#">Estatus de cuenta</Link>
            <Link to="#">Contacto</Link>
            <span className="material-symbols-outlined">
              {theme === "light" ? "light_mode" : "dark_mode"}
            </span>

            <Link to="#" className={styles.nav_notification}>
              <img
                src={Notification}
                alt="Notificaciones"
                className={styles.image}
              />
            </Link>
            <Link to="#" className={styles.nav_userImage}>
              <img src={userImage} alt="usuario" className={styles.image} />
            </Link>
          </div>
        </div>

        <div className={styles.nav_admin}>
          {user === "Admin" && (
            <>
              <Link to="/Register">Agregar usuario</Link>
              <Link to="/Users">Usuarios</Link>
              <Link to="/">Registro de pagos</Link>
              <Link to="/">Registro de multas</Link>
              <Link to="/">Permisos de portones</Link>
              <Link to="/">Condominios</Link>

              <div className={classNames(styles.hidden, styles.more_Options)}>
                Más opciones
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
