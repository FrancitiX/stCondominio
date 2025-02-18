import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./../styles/components/Nav.module.css";
import Logo from "/Logo.png";
import userImage from "./../assets/Usuario.png";
import Notification from "./../assets/notification.png";
import classNames from "classnames";
import { pushNotifications } from "../utils/notifications";

function NavBar() {
  const [rol, setRol] = useState(localStorage.getItem("typeUser"));
  const [user, setUser] = useState(localStorage.getItem("userData"));

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [notifications, setNotifications] = useState([]);
  const [notifyStatus, setNotifyStatus] = useState(false);
  const [selectedNotifications, setSelectedNotifications] = useState([]);
  const [username, setUsername] = useState("");
  const noNotify = !notifyStatus
    ? "Sin notificaciones nuevas"
    : "Sin notificaciones leídas";

  const location = useLocation();
  const page = location.pathname.replace("/", "");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const fetchNotifications = async () => {
    try {
      const data = await pushNotifications();
      setNotifications(data);
    } catch (error) {
      console.error("Error al obtener notificaciones:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();

    const interval = setInterval(() => {
      fetchNotifications();
    }, 5000);

    return () => clearInterval(interval);
  }, [notifications]);

  useEffect(() => {
    setUsername(JSON.parse(user).username);
  }, [user]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const filteredNotifications = Array.isArray(notifications)
    ? notifications.filter(
        (notify) => notify.recipients[0].read === notifyStatus
      )
    : [];

  const newNotifications = Array.isArray(notifications)
    ? notifications.filter((notify) => notify.recipients[0].read === false)
    : [];

  const selectNotification = (id) => {
    setSelectedNotifications((prev) =>
      prev.includes(id)
        ? prev.filter((notifId) => notifId !== id)
        : [...prev, id]
    );
  };

  const selectAll = (event) => {
    if (event.target.checked) {
      setSelectedNotifications(filteredNotifications.map((notif) => notif.id));
    } else {
      setSelectedNotifications([]);
    }
  };

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
              className={classNames(
                styles.pago,
                page === "payments" ? styles.active_option : null
              )}
            >
              Realizar pago
            </Link>
            <Link
              to="/status"
              className={classNames(
                styles.estatus,
                page === "status" ? styles.active_option : null
              )}
            >
              Estatus de cuenta
            </Link>
            <Link
              to="/contact"
              className={classNames(
                styles.contacto,
                page === "contact" ? styles.active_option : null
              )}
            >
              Contacto
            </Link>
            <span onClick={toggleTheme} className="material-symbols-outlined">
              {theme === "light" ? "light_mode" : "dark_mode"}
            </span>

            <div
              className={classNames(styles.usuario, styles.nav_notification)}
            >
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
                        <input
                          type="checkbox"
                          value={notify.id}
                          checked={selectedNotifications.includes(notify.id)}
                          onChange={() => selectNotification(notify.id)}
                        />
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
                    <input
                      type="checkbox"
                      onChange={selectAll}
                      checked={
                        selectedNotifications.length ===
                          filteredNotifications.length &&
                        filteredNotifications.length > 0
                      }
                    />
                    <button
                      className={classNames(
                        styles.notify_button,
                        styles.notify_reader
                      )}
                      onClick={() =>
                        console.log(
                          "Marcar como leídas:",
                          selectedNotifications
                        )
                      }
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
            <Link
              to={`/profile/${username}`}
              className={classNames(styles.usuario, styles.nav_userImage)}
            >
              <img src={userImage} alt="usuario" className={styles.image} />
            </Link>
          </div>
        </div>

        <div className={styles.nav_admin}>
          {rol === "1" && (
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
