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
  const [notifyStatus, setNotifyStatus] = useState(false);

  const notifications = [
    {
      id: "M1",
      type: "multa",
      title: "Usted a sido multado",
      short: "Multa por tiempo limite de pago",
      recipients: [
        {
          user: "Usuario",
          read: false,
        },
      ],
      date: { date: "27/012025", time: "08:00 p.m." },
    },
    {
      id: "M2",
      type: "recordatorio",
      title: "Recordatorio de pago",
      short: "Su pago vence pronto",
      recipients: [
        {
          user: "Usuario",
          read: true,
        },
      ],
      date: { date: "25/01/2025", time: "10:00 a.m." },
    },
  ];

  const filteredNotifications = notifications.filter(
    (notify) => notify.recipients[0].read === notifyStatus
  );

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

            <div className={styles.nav_notification}>
              <img
                src={Notification}
                alt="Notificaciones"
                className={styles.nav_img}
              />
              {notifications.length > 0 && (
                <span className={styles.notification_count}>
                  {notifications.length}
                </span>
              )}
              <div className={styles.notifications}>
                <div className={styles.notify_status}>
                  <div className={styles.notify_read}>
                    <button
                      onClick={() => setNotifyStatus(false)}
                      className={classNames(
                        styles.notify_button,
                        !notifyStatus && styles.active
                      )}
                    >
                      No leídas
                    </button>
                    <button
                      onClick={() => setNotifyStatus(true)}
                      className={classNames(
                        styles.notify_button,
                        notifyStatus && styles.active
                      )}
                    >
                      Leídas
                    </button>
                  </div>
                  <div className={styles.underline}></div>
                </div>

                <div className={styles.notifications_container}>
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notify) => (
                      <div key={notify.id} className={styles.notify_container}>
                        <input type="checkbox" />
                        <Link
                          to={`/notification/${notify.id}`}
                          className={styles.notify_url}
                        >
                          <div className={styles.notify_read}>
                            <div>
                              <p>{notify.title}</p>
                            </div>
                            <span className={styles.notify_date}>
                              {notify.date.date}
                            </span>
                          </div>
                          <p className={styles.notify_description}>
                            {notify.short}
                          </p>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div>Sin notificaciones nuevas</div>
                  )}
                </div>

                <div className={styles.notify_read}>
                  <div className={styles.notifications_mask}>
                    <input type="checkbox" />
                    <button
                      className={classNames(
                        styles.notify_button,
                        styles.notify_reader
                      )}
                    >
                      Marcar como leidas
                    </button>
                  </div>
                  <button
                    className={classNames(styles.notify_button, styles.delete)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
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
              <Link to="/penaltys">Registro de multas</Link>
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
