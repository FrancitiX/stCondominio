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
            to="/home"
            className={classNames(styles.nav_left, styles.title)}
          >
            <img src={Logo} alt="Logo" />
            <h1>Condominios SIXFT</h1>
          </Link>
          <div className={styles.nav_right}>
            <Link to="/payments">Realizar pago</Link>
            <Link to="/status">Estatus de cuenta</Link>
            <Link to="/contact">Contacto</Link>
            <span className="material-symbols-outlined">
              {theme === "light" ? "light_mode" : "dark_mode"}
            </span>

            <Link to="/notifications" className={styles.nav_notification}>
              <img
                src={Notification}
                alt="Notificaciones"
                className={styles.image}
              />
            </Link>
            <Link to="/profile" className={styles.nav_userImage}>
              <img src={userImage} alt="usuario" className={styles.image} />
            </Link>
          </div>
        </div>

        <div className={styles.nav_admin}>
          {user === "Admin" && (
            <>
              <Link to="/register">Agregar usuario</Link>
              <Link to="/users">Usuarios</Link>
              <Link to="/pay-admin">Registro de pagos</Link>
              <Link to="/fines">Registro de multas</Link>
              <Link to="/gates">Permisos de portones</Link>
              <Link to="/condominiums">Condominios</Link>

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
