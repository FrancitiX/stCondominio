import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./../styles/components/Nav.module.css";
import Logo from "/Logo.png";
import userImage from "./../assets/Usuario.png";
import Notification from "./../assets/notification.png";
import classNames from "classnames";

function NavBar() {
  const user = localStorage.getItem("typeUser");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [notifyStatus, setNotifyStatus] = useState(false);
  const noNotify = !notifyStatus
    ? "Sin notificaciones nuevas"
    : "Sin notificaciones leídas";

  const location = useLocation();
  const page = location.pathname.replace("/", "");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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

  const newNotifications = notifications.filter(
    (notify) => notify.recipients[0].read === false
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
            <Link
              to="/payments"
              className={page === "payments" ? styles.active_option : null}
            >
              Realizar pago
            </Link>
            <Link
              to="/status"
              className={page === "status" ? styles.active_option : null}
            >
              Estatus de cuenta
            </Link>
            <Link
              to="/contact"
              className={page === "contact" ? styles.active_option : null}
            >
              Contacto
            </Link>
            <span onClick={toggleTheme} className="material-symbols-outlined">
              {theme === "light" ? "light_mode" : "dark_mode"}
            </span>

            <div className={styles.nav_notification}>
              <img
                src={Notification}
                alt="Notificaciones"
                className={styles.nav_img}
              />
              {newNotifications.length > 0 && (
                <span className={styles.notification_count}>
                  {newNotifications.length}
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
                  <div
                    className={classNames(
                      styles.underline,
                      notifyStatus && styles.active
                    )}
                  ></div>
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
                    <div className={styles.no_notify}>{noNotify}</div>
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

                <div className={styles.notifications_all}>
                  <Link className={classNames(styles.notify_all)}>
                    Ver todas las notificaciones
                  </Link>
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
              <Link
                to="/register"
                className={page === "register" ? styles.active_option : null}
              >
                Agregar usuario
              </Link>
              <Link
                to="/users"
                className={page === "users" ? styles.active_option : null}
              >
                Usuarios
              </Link>
              <Link
                to="/pay-admin"
                className={page === "pay-admin" ? styles.active_option : null}
              >
                Registro de pagos
              </Link>
              <Link
                to="/penaltys"
                className={page === "penaltys" ? styles.active_option : null}
              >
                Registro de multas
              </Link>
              <Link
                to="/gates"
                className={page === "gates" ? styles.active_option : null}
              >
                Permisos de portones
              </Link>
              <Link
                to="/condominiums"
                className={
                  page === "condominiums" ? styles.active_option : null
                }
              >
                Condominios
              </Link>

              <div className={classNames(styles.hidden, styles.more_Options)}>
                {notifyStatus && <>Sin notificaciones nuevas</>}
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
