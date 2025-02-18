import React, { useEffect, useState } from "react";
import NavBar from "../components/Nav-bar";
import Footer from "../components/Footer";
import styles from "./../styles/Home.module.css";
import classNames from "classnames";
import { getUser } from "../utils/user";

function Home() {
  const rol = localStorage.getItem("typeUser");
  const [username, setUsername] = useState("usuario");
  const [User, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getUser(token).then((data) => {
        if (data) {
          setUsername(data.name.name);
          setUser(data);
        }
      });
    }
  }, []);

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <section className={classNames(styles.welcome)}>
          <div className={classNames(styles.welcomeText)}>
            <h1>
              ¡Bienvenido de nuevo <br />
              <span>{username}</span>!
            </h1>
          </div>
        </section>

        <div className={classNames(styles.monthCard)}>
          <div className={classNames(styles.monthPrice)}>
            <div className={styles.monthTitle}>
              <h3>Pago mensual</h3>
              <p>sig. pago 01/02/25</p>
            </div>
            <div>
              <h1 className={styles.monthPay}>$35,000.00</h1>
            </div>
          </div>
          <div className={classNames(styles.monthDescription)}>
            <div>
              <p>Descripción</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                molestias temporibus eos modi harum, mollitia doloribus,
                dignissimos facere magnam eius, sunt labore consequatur dolore
                hic eum tempore. Inventore, veritatis autem.
              </p>
            </div>
            <div>
              <p>Ubicación</p>
              <p>No sé ayuda me siento mal</p>
            </div>
          </div>
        </div>

        <section className="container">
          <div className={`${styles.account} center`}>
            <h3>Datos de cuenta</h3>
            <div className={styles.data_account}>
              <p>
                Nombre:{" "}
                <span>
                  {User ? (
                    <>
                      {username} {User.name?.paternal_surname ?? ""}{" "}
                      {User.name?.maternal_surname ?? ""}
                    </>
                  ) : (
                    "Cargando..."
                  )}
                </span>
              </p>
              <p>
                Telefono:{" "}
                <span>
                  {User ? <>{User.cellphone ?? ""}</> : "Cargando..."}
                </span>
              </p>
              <p>
                Sona: <span>Todos los condominios</span>
              </p>
              <p>
                Tipo de usuario:{" "}
                {User
                  ? (() => {
                      switch (User.rol) {
                        case "1":
                          return "Administración";
                        case "2":
                          return "Torre";
                        case "3":
                          return "Departamento";
                        case "4":
                          return "Dueño";
                        case "5":
                          return "Administrador";
                        case "6":
                          return "Inquilino";
                        default:
                          return "Desconocido";
                      }
                    })()
                  : "Cargando..."}
              </p>
              <p>
                Estancia: <span>Anfitrion</span>
              </p>
            </div>
          </div>
        </section>
        <section className={`${styles.anfitrion} container`}>
          <h3>Contacte con su anfitrión</h3>
          <div className={classNames(styles.data_anfitrion)}>
            <p>
              Anfitrión: <span>Anfitrion</span>
            </p>
            <p>
              correo: <span>anfitrion@gmail.com</span>
            </p>
            <p>
              Número de contacto: <span>3300000000</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
